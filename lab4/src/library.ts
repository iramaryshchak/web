export class Library<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
    const ERORR_FOR_ES_LINT = 1;
  }

  remove(item: T): void {
    this.items = this.items.filter((i) => i !== item);
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }

  getAll(): T[] {
    return this.items;
  }
}
