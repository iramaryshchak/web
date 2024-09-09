import { Library } from "./library";
import { StorageService } from "./services";
import { Validation } from "./validation";
import { Modal } from "./modal";
import { Book, User } from "./models";

const library = new Library<Book>();
const userLibrary = new Library<User>();
const storageService = new StorageService();
const modal = new Modal();

function loadDataFromStorage() {
  const savedBooks = storageService.load<Book[]>("library");
  const savedUsers = storageService.load<User[]>("users");

  if (savedBooks) {
    savedBooks.forEach((bookData) => {
      const book = new Book(
        bookData.id,
        bookData.title,
        bookData.author,
        bookData.year,
        bookData.isBorrowed
      );
      library.add(book);
    });
  }

  if (savedUsers) {
    savedUsers.forEach((userData) => {
      const user = new User(
        userData.id,
        userData.name,
        userData.email,
        userData.borrowedBooks.map((bookData) => {
          return new Book(
            bookData.id,
            bookData.title,
            bookData.author,
            bookData.year,
            bookData.isBorrowed
          );
        })
      );
      userLibrary.add(user);
    });
  }
}

// Function to render the main application
function renderApp() {
  loadDataFromStorage();
  const appElement = document.getElementById("app");

  if (appElement) {
    appElement.innerHTML = `
        <div class="container mt-5">
          <div class="row">
            <div class="col-12">
              <h2 class="mb-3 text-center">Додати Книгу</h2>
            </div>
            <div class="col-12 col-md-6">
              <div class="mb-3">
                <label for="bookTitle" class="form-label">Назва книги</label>
                <input type="text" class="form-control" id="bookTitle" placeholder="Назва книги" />
              </div>
              <div class="mb-3">
                <label for="bookAuthor" class="form-label">Автор</label>
                <input type="text" class="form-control" id="bookAuthor" placeholder="Автор" />
              </div>
              <div class="mb-3">
                <label for="bookYear" class="form-label">Рік видання</label>
                <input type="number" class="form-control" id="bookYear" placeholder="Рік видання" />
              </div>
              <button id="addBook" class="btn btn-primary w-100">Додати Книгу</button>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-12">
              <h2 class="mb-3 text-center">Додати Користувача</h2>
            </div>
            <div class="col-12 col-md-6">
              <div class="mb-3">
                <label for="userName" class="form-label">Ім'я користувача</label>
                <input type="text" class="form-control" id="userName" placeholder="Ім'я" />
              </div>
              <div class="mb-3">
                <label for="userEmail" class="form-label">Електронна пошта</label>
                <input type="email" class="form-control" id="userEmail" placeholder="Електронна пошта" />
              </div>
              <button id="addUser" class="btn btn-primary w-100">Додати Користувача</button>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-12">
              <h2 class="mb-3 text-center">Список Книг</h2>
              <div id="bookList" class="list-group"></div>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-12">
              <h2 class="mb-3 text-center">Список Користувачів</h2>
              <div id="userList" class="list-group"></div>
            </div>
          </div>
        </div>
      `;

    document.getElementById("addBook")?.addEventListener("click", () => {
      const title = (document.getElementById("bookTitle") as HTMLInputElement)
        .value;
      const author = (document.getElementById("bookAuthor") as HTMLInputElement)
        .value;
      const year = (document.getElementById("bookYear") as HTMLInputElement)
        .value;

      const isValid =
        title.trim() !== "" &&
        author.trim() !== "" &&
        Validation.isValidYear(year);

      if (isValid) {
        const newBook = new Book(
          `${Date.now()}`,
          title,
          author,
          parseInt(year)
        );
        library.add(newBook);
        storageService.save("library", library.getAll());
        renderBooks();
      } else {
        alert("Укажіть рік правильно.");
      }
    });

    document.getElementById("addUser")?.addEventListener("click", () => {
      const name = (document.getElementById("userName") as HTMLInputElement)
        .value;
      const email = (document.getElementById("userEmail") as HTMLInputElement)
        .value;

      const isValid = name.trim() !== "" && Validation.isValidEmail(email);

      if (isValid) {
        const newUser = new User(`${Date.now()}`, name, email);
        userLibrary.add(newUser);
        storageService.save("users", userLibrary.getAll());
        renderUsers(); 
      } else {
        alert("Невірні дані користувача.");
      }
    });

    renderBooks();
    renderUsers();
  }
}

// Handle the logic of borrowing/returning a book
function handleConfirm(book: Book) {
  const userId = (document.getElementById("userIdInput") as HTMLInputElement)
    .value;
  const user = userLibrary.find((u) => u.id === userId);

  if (!user) {
    alert("User not found.");
    return;
  }

  try {
    if (!book.isBorrowed) {
      user.borrowBook(book);
      book.borrow();
    } else {
      user.returnBook(book.id);
      book.returnBook();
    }

    storageService.save("library", library.getAll());
    storageService.save("users", userLibrary.getAll());
    modal.close();
    renderBooks();
    renderUsers();
  } catch (error: any) {
    alert(error.message);
  }
}

// Render books with "Borrow" or "Return" buttons
function renderBooks() {
  const bookList = document.getElementById("bookList");
  const books = storageService.load<Book[]>("library") || [];

  if (bookList) {
    bookList.innerHTML = books
      .map(
        (book) => `
            <div class="list-group-item">
              <h5>${book.title}</h5>
              <p class="mb-1">Автор: ${book.author}</p>
              <small>Рік видання: ${book.year}</small>
              <button class="btn ${
                book.isBorrowed ? "btn-warning" : "btn-success"
              } borrow-btn" data-id="${book.id}">${
          book.isBorrowed ? "Return" : "Borrow"
        }</button>
            </div>
        `
      )
      .join("");


    document.querySelectorAll(".borrow-btn").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const bookId = (event.target as HTMLElement).getAttribute("data-id");
        const book = library.find((b) => b.id === bookId);

        if (book) {
          modal.open(
            book.isBorrowed
              ? "Enter user ID to return the book:"
              : "Enter user ID to borrow the book:"
          );

          // Detach previous event listeners and attach new one to "Confirm" button
          document
            .getElementById("modalConfirm")
            ?.removeEventListener("click", handleConfirm as any);
          document
            .getElementById("modalConfirm")
            ?.addEventListener("click", () => handleConfirm(book));
        }
      });
    });
  }
}


function renderUsers() {
  const userList = document.getElementById("userList");
  const users = storageService.load<User[]>("users") || [];

  if (userList) {
    userList.innerHTML = users
      .map(
        (user) => `
            <div class="list-group-item">
              <h5>ID: ${user.id}</h5>
              <h5>NAME: ${user.name}</h5>
              <p class="mb-1">Email: ${user.email}</p>
              <small>Borrowed books:</small>
              <ul>
                ${user.borrowedBooks
                  .map(
                    (book) => `
                  <li>${book.title} by ${book.author} (${book.year})</li>
                `
                  )
                  .join("")}
              </ul>
            </div>
        `
      )
      .join("");
  }
}

renderApp();
