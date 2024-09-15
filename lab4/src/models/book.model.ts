export interface IBook {
  id: string;
  title: string;
  author: string;
  year: number;
  isBorrowed: boolean;
}

export class Book implements IBook {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public year: number,
    public isBorrowed: boolean = false
  ) {}

  borrow(): void {
    this.isBorrowed = true;
  }

  returnBook(): void {
    this.isBorrowed = false;
  }
}
