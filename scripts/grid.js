export class Grid {
  constructor (columns, rows) {
    this.items = new Array(columns).fill(null)
      .map(() => new Array(rows).fill(0));
  }

  forEach (fn) {
    for (let col = 0; col < this.items.length; col++) {
      for (let row = 0; row < this.items[col].length; row++) {
        fn(col, row);
      }
    }
  }

  get (col, row) {
    return this.items[col][row]
  }

  set (col, row, value) {
    this.items[col][row] = value
  }

  clear () {
    this.forEach((col, row) => this.set(col, row, 0));
  }

  randomize () {
    this.forEach((col, row) => this.set(col, row, Math.floor(Math.random() * 2)));
  }
}