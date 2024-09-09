"use strict";
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isBorrowed = false;
    }
    borrow() {
        if (this.isBorrowed) {
            console.log(`Книга "${this.title}" вже позичена.`);
        }
        else {
            this.isBorrowed = true;
            console.log(`Ви позичили книгу "${this.title}".`);
        }
    }
}
class Magazine {
    constructor(title, author, issueNumber) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
        this.isBorrowed = false;
    }
    borrow() {
        if (this.isBorrowed) {
            console.log(`Журнал "${this.title}" вже позичений.`);
        }
        else {
            this.isBorrowed = true;
            console.log(`Ви позичили журнал "${this.title}".`);
        }
    }
}
class DVD {
    constructor(title, author, duration) {
        this.title = title;
        this.author = author;
        this.duration = duration;
        this.isBorrowed = false;
    }
    borrow() {
        if (this.isBorrowed) {
            console.log(`DVD "${this.title}" вже позичене.`);
        }
        else {
            this.isBorrowed = true;
            console.log(`Ви позичили DVD "${this.title}".`);
        }
    }
}
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        console.log(`Додано "${item.title}" до бібліотеки.`);
    }
    findItemByName(name) {
        for (const item of this.items) {
            if (item.title === name) {
                return item;
            }
        }
        return undefined;
    }
    listAvailableItems() {
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
