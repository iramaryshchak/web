interface LibraryItem {
  title: string;
  author: string;
  borrow(): void;
}

class Book implements LibraryItem {
  title: string;
  author: string;
  pages: number;
  private isBorrowed: boolean;

  constructor(title: string, author: string, pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isBorrowed = false;
  }

  borrow(): void {
    if (this.isBorrowed) {
      console.log(`Книга "${this.title}" вже позичена.`);
    } else {
      this.isBorrowed = true;
      console.log(`Ви позичили книгу "${this.title}".`);
    }
  }
}

class Magazine implements LibraryItem {
  title: string;
  author: string;
  issueNumber: number;
  private isBorrowed: boolean;

  constructor(title: string, author: string, issueNumber: number) {
    this.title = title;
    this.author = author;
    this.issueNumber = issueNumber;
    this.isBorrowed = false;
  }

  borrow(): void {
    if (this.isBorrowed) {
      console.log(`Журнал "${this.title}" вже позичений.`);
    } else {
      this.isBorrowed = true;
      console.log(`Ви позичили журнал "${this.title}".`);
    }
  }
}

class DVD implements LibraryItem {
  title: string;
  author: string;
  duration: number;
  private isBorrowed: boolean;

  constructor(title: string, author: string, duration: number) {
    this.title = title;
    this.author = author;
    this.duration = duration;
    this.isBorrowed = false;
  }

  borrow(): void {
    if (this.isBorrowed) {
      console.log(`DVD "${this.title}" вже позичене.`);
    } else {
      this.isBorrowed = true;
      console.log(`Ви позичили DVD "${this.title}".`);
    }
  }
}

class Library {
  private items: LibraryItem[] = [];

  addItem(item: LibraryItem): void {
    this.items.push(item);
    console.log(`Додано "${item.title}" до бібліотеки.`);
  }

  findItemByName(name: string): LibraryItem | undefined {
    for (const item of this.items) {
      if (item.title === name) {
        return item;
      }
    }
    return undefined;
  }

  listAvailableItems(): void {
    console.log("Доступні елементи:");
    this.items.forEach((item) => {
      console.log(`Назва: ${item.title}, Автор: ${item.author}`);
    });
  }
}

const book1 = new Book("Убити пересмішника", "Гарпер Лі", 281);
const magazine1 = new Magazine("Журнал", "Різні автори", 202);
const dvd1 = new DVD("Країна мрій", "Крістофер Нолан", 148);

const library = new Library();

library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

book1.borrow();
magazine1.borrow();
dvd1.borrow();

book1.borrow();

library.listAvailableItems();

const foundItem = library.findItemByName("National Geographic");
if (foundItem) {
  console.log(`Знайдено елемент: ${foundItem.title} від ${foundItem.author}`);
}
