import { expect } from 'chai';
import { Library } from '../library';

class TestItem {
  constructor(
    public id: number,
    public name: string
  ) {}
}

describe('Library', () => {
  let library: Library<TestItem>;
  let item1: TestItem;
  let item2: TestItem;

  beforeEach(() => {
    library = new Library<TestItem>();
    item1 = new TestItem(1, 'Item 1');
    item2 = new TestItem(2, 'Item 2');
  });

  it('should add items', () => {
    library.add(item1);
    library.add(item2);
    expect(library.getAll()).to.deep.equal([item1, item2]);
  });

  it('should remove items', () => {
    library.add(item1);
    library.add(item2);
    library.remove(item1);
    expect(library.getAll()).to.deep.equal([item2]);
  });

  it('should find items', () => {
    library.add(item1);
    library.add(item2);
    const foundItem = library.find((item) => item.id === 2);
    expect(foundItem).to.equal(item2);
  });
});
