import { Library } from './library';
import { StorageService } from './services';
import { Validation } from './validation';
import { Modal } from './modal';
import { Book, User } from './models';

class LibraryApp {
  private library: Library<Book>;
  private userLibrary: Library<User>;
  private storageService: StorageService;
  private modal: Modal;

  constructor() {
    this.library = new Library<Book>();
    this.userLibrary = new Library<User>();
    this.storageService = new StorageService();
    this.modal = new Modal();
  }

  public init() {
    this.loadDataFromStorage();
    this.renderApp();
  }

  private loadDataFromStorage() {
    const savedBooks = this.storageService.load<Book[]>('library');
    const savedUsers = this.storageService.load<User[]>('users');
    console.log(123123);

    if (savedBooks) {
      savedBooks.forEach((bookData) => {
        const book = new Book(
          bookData.id,
          bookData.title,
          bookData.author,
          bookData.year,
          bookData.isBorrowed
        );
        this.library.add(book);
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
        this.userLibrary.add(user);
      });
    }
  }

  private renderApp() {
    const appElement = document.getElementById('app');

    if (appElement) {
      appElement.innerHTML = `
        <div class="container d-flex flex-column mt-5">
          <!-- Your existing HTML structure -->
          <!-- Add Book Form -->
         <div class="d-flex flex-nowrap justify-content-between">
          <!-- Book Form -->
          <div class="col-12 col-md-5">
            <h2 class="mb-3 text-center">Додати Книгу</h2>
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

          <!-- User Form -->
          <div class="col-12 col-md-5 ms-md-3">
            <h2 class="mb-3 text-center">Додати Користувача</h2>
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


          <!-- Book List -->
          <div class="row mt-5">
            <div class="col-12">
              <h2 class="mb-3 text-center">Список Книг</h2>
              <div id="bookList" class="list-group"></div>
            </div>
          </div>

          <!-- User List -->
          <div class="row mt-5">
            <div class="col-12">
              <h2 class="mb-3 text-center">Список Користувачів</h2>
              <div id="userList" class="list-group"></div>
            </div>
          </div>
        </div>
      `;

      document
        .getElementById('addBook')
        ?.addEventListener('click', () => this.addBook());
      document
        .getElementById('addUser')
        ?.addEventListener('click', () => this.addUser());

      this.renderBooks();
      this.renderUsers();
    }
  }

  private addBook() {
    this.clearFieldError('bookTitle');
    this.clearFieldError('bookAuthor');
    this.clearFieldError('bookYear');

    const titleInput = document.getElementById('bookTitle') as HTMLInputElement;
    const authorInput = document.getElementById(
      'bookAuthor'
    ) as HTMLInputElement;
    const yearInput = document.getElementById('bookYear') as HTMLInputElement;

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const year = yearInput.value.trim();

    let isValid = true;

    if (title === '') {
      this.showFieldError('bookTitle', 'Назва книги не може бути пустою');
      isValid = false;
    }

    if (author === '') {
      this.showFieldError('bookAuthor', 'Автор не може бути пустим');
      isValid = false;
    }

    if (!Validation.isValidYear(year)) {
      this.showFieldError(
        'bookYear',
        'Рік видання повинен бути коректним числом'
      );
      isValid = false;
    }

    if (isValid) {
      const newBook = new Book(`${Date.now()}`, title, author, parseInt(year));
      this.library.add(newBook);
      this.storageService.save('library', this.library.getAll());
      this.renderBooks();

      this.modal.openSuccessModal(`Книгу "${title}" успішно додано.`);

      titleInput.value = '';
      authorInput.value = '';
      yearInput.value = '';
    }
  }

  private addUser() {
    this.clearFieldError('userName');
    this.clearFieldError('userEmail');

    const nameInput = document.getElementById('userName') as HTMLInputElement;
    const emailInput = document.getElementById('userEmail') as HTMLInputElement;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    let isValid = true;

    if (name === '') {
      this.showFieldError('userName', "Ім'я користувача не може бути пустим");
      isValid = false;
    }

    if (!Validation.isValidEmail(email)) {
      this.showFieldError('userEmail', 'Електронна пошта некоректна');
      isValid = false;
    }

    if (isValid) {
      const newUser = new User(`${Date.now()}`, name, email);
      this.userLibrary.add(newUser);
      this.storageService.save('users', this.userLibrary.getAll());
      this.renderUsers();

      this.modal.openSuccessModal(`Користувача "${name}" успішно додано.`);

      nameInput.value = '';
      emailInput.value = '';
    }
  }

  private handleConfirm(book: Book) {
    const userId = (document.getElementById('userIdInput') as HTMLInputElement)
      .value;
    const user = this.userLibrary.find((u) => u.id === userId);

    if (!user) {
      alert('User not found.');
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

      this.storageService.save('library', this.library.getAll());
      this.storageService.save('users', this.userLibrary.getAll());
      this.modal.close();
      this.renderBooks();
      this.renderUsers();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.message);
    }
  }

  private renderBooks() {
    const bookList = document.getElementById('bookList');
    const books = this.library.getAll();

    if (bookList) {
      bookList.innerHTML = books
        .map(
          (book) => `
            <div class="list-group-item">
              <h5>${book.title}</h5>
              <p class="mb-1">Автор: ${book.author}</p>
              <small>Рік видання: ${book.year}</small>
              <button class="btn ${
                book.isBorrowed ? 'btn-warning' : 'btn-success'
              } borrow-btn" data-id="${book.id}">${
                book.isBorrowed ? 'Return' : 'Borrow'
              }</button>
            </div>
          `
        )
        .join('');

      // додаємо обробник події для кожної кнопки
      document.querySelectorAll('.borrow-btn').forEach((btn) => {
        btn.addEventListener('click', (event) =>
          this.onBorrowButtonClick(event)
        );
      });
    }
  }

  private onBorrowButtonClick(event: Event) {
    const bookId = (event.target as HTMLElement).getAttribute('data-id');
    const book = this.library.find((b) => b.id === bookId);

    if (book) {
      this.modal.open(
        book.isBorrowed
          ? 'Enter user ID to return the book:'
          : 'Enter user ID to borrow the book:'
      );

      // Видаляємо попередній обробник події
      const modalConfirm = document.getElementById('modalConfirm');
      const test_error = 1;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      modalConfirm?.removeEventListener('click', this.handleConfirm as any);
      modalConfirm?.addEventListener('click', () => this.handleConfirm(book));
    }
  }

  private renderUsers() {
    const userList = document.getElementById('userList');
    const users = this.userLibrary.getAll();

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
                  .join('')}
              </ul>
            </div>
          `
        )
        .join('');
    }
  }

  // Відображаємо помилку для поля
  private showFieldError(fieldId: string, message: string) {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    field.classList.add('is-invalid');

    // Перевіряємо чи вже є помилка для цього поля
    let errorElement = field.parentElement?.querySelector(
      '.invalid-feedback'
    ) as HTMLElement;
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'invalid-feedback';
      field.parentElement?.appendChild(errorElement);
    }
    errorElement.textContent = message;
  }

  private clearFieldError(fieldId: string) {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    field.classList.remove('is-invalid');

    const errorElement =
      field.parentElement?.querySelector('.invalid-feedback');
    if (errorElement) {
      errorElement.remove();
    }
  }
}

// Ініціалізуєм наш додаток
const app = new LibraryApp();
app.init();
