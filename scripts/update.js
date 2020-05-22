import { COLUMNS, ROWS } from './constants.js';
import { Grid } from './grid.js';

const oldGrid = new Grid(COLUMNS, ROWS);

export function update(grid) {
  grid.forEach((col, row) => {
    oldGrid.set(col, row, grid.get(col, row))
  })

  grid.forEach((col, row) => {
    const cell = oldGrid.get(col, row);
    let numNeighbors = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (i === 0 && j === 0) {
          continue;
        }
        const x_cell = col + i;
        const y_cell = row + j;

        if (x_cell >= 0 && y_cell >= 0 && x_cell < COLUMNS && y_cell < ROWS) {
          numNeighbors += oldGrid.get(col + i, row + j);
        }
      }
    }

    //rules
    if (cell === 1 && numNeighbors < 2) {
      grid.set(col, row, 0);
    } else if (cell === 1 && numNeighbors > 3) {
      grid.set(col, row, 0);
    } else if (cell === 0 && numNeighbors === 3) {
      grid.set(col, row, 1);
    }
  })
}
