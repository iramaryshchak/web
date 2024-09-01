var Book = /** @class */ (function () {
    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isBorrowed = false;
    }
    Book.prototype.borrow = function () {
        if (this.isBorrowed) {
            console.log("\u041A\u043D\u0438\u0433\u0430 \"".concat(this.title, "\" \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0430."));
        }
        else {
            this.isBorrowed = true;
            console.log("\u0412\u0438 \u043F\u043E\u0437\u0438\u0447\u0438\u043B\u0438 \u043A\u043D\u0438\u0433\u0443 \"".concat(this.title, "\"."));
        }
    };
    return Book;
}());
var Magazine = /** @class */ (function () {
    function Magazine(title, author, issueNumber) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
        this.isBorrowed = false;
    }
    Magazine.prototype.borrow = function () {
        if (this.isBorrowed) {
            console.log("\u0416\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\" \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0438\u0439."));
        }
        else {
            this.isBorrowed = true;
            console.log("\u0412\u0438 \u043F\u043E\u0437\u0438\u0447\u0438\u043B\u0438 \u0436\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\"."));
        }
    };
    return Magazine;
}());
var DVD = /** @class */ (function () {
    function DVD(title, author, duration) {
        this.title = title;
        this.author = author;
        this.duration = duration;
        this.isBorrowed = false;
    }
    DVD.prototype.borrow = function () {
        if (this.isBorrowed) {
            console.log("DVD \"".concat(this.title, "\" \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0435."));
        }
        else {
            this.isBorrowed = true;
            console.log("\u0412\u0438 \u043F\u043E\u0437\u0438\u0447\u0438\u043B\u0438 DVD \"".concat(this.title, "\"."));
        }
    };
    return DVD;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("\u0414\u043E\u0434\u0430\u043D\u043E \"".concat(item.title, "\" \u0434\u043E \u0431\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0438."));
    };
    Library.prototype.findItemByName = function (name) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.title === name) {
                return item;
            }
        }
        return undefined;
    };
    Library.prototype.listAvailableItems = function () {
        console.log("Доступні елементи:");
        this.items.forEach(function (item) {
            console.log("\u041D\u0430\u0437\u0432\u0430: ".concat(item.title, ", \u0410\u0432\u0442\u043E\u0440: ").concat(item.author));
        });
    };
    return Library;
}());
var book1 = new Book("Убити пересмішника", "Гарпер Лі", 281);
var magazine1 = new Magazine("National Geographic", "Різні автори", 202);
var dvd1 = new DVD("Країна мрій", "Крістофер Нолан", 148);
var library = new Library();
library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);
book1.borrow();
magazine1.borrow();
dvd1.borrow();
book1.borrow();
library.listAvailableItems();
var foundItem = library.findItemByName("National Geographic");
if (foundItem) {
    console.log("\u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0435\u043B\u0435\u043C\u0435\u043D\u0442: ".concat(foundItem.title, " \u0432\u0456\u0434 ").concat(foundItem.author));
}
