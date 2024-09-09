import { IBook } from "./book.model";

export interface IUser {
  id: string;
  name: string;
  email: string;
  borrowedBooks: IBook[];
}

export class User implements IUser {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public borrowedBooks: IBook[] = []
  ) {}

  borrowBook(book: IBook): void {
    if (this.borrowedBooks.length < 3) {
      this.borrowedBooks.push(book);
    } else {
      throw new Error("User cannot borrow more than 3 books");
    }
  }

  returnBook(bookId: string): void {
    this.borrowedBooks = this.borrowedBooks.filter((b) => b.id !== bookId);
  }
}
