class SortedList {
  constructor() {
    this.items = [];
    this.length = '';
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if(!this.items[pos]) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if(this.length === '') throw new Error('EmptySortedList');
    let pos = this.length -1;
    return this.items[pos];
  }

  min() {
    if(this.length === '') throw new Error('EmptySortedList');
    return this.items[0];
  }

  sum() {
    if(this.length === '') return this.length;
    let sum = this.items.reduce((acc, item) => {
    return acc += item;
    });
    return sum;
  }

  avg() {
    if(this.length === '') throw new Error('EmptySortedList');
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
