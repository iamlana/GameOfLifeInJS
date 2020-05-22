import { COLUMNS, ROWS } from './constants.js';
import { buildGrid } from './grid.js';

const oldGrid = buildGrid();

export function update(grid) {
  for (let col = 0; col < oldGrid.length; col++) {
    for (let row = 0; row < oldGrid[col].length; row++) {
      oldGrid[col][row] = grid[col][row];
    }
  }

  for (let col = 0; col < oldGrid.length; col++) {
    for (let row = 0; row < oldGrid[col].length; row++) {
      const cell = oldGrid[col][row];
      let numNeighbors = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue;
          }
          const x_cell = col + i;
          const y_cell = row + j;

          if (x_cell >= 0 && y_cell >= 0 && x_cell < COLUMNS && y_cell < ROWS) {
            numNeighbors += oldGrid[col + i][row + j];
          }
        }
      }
      //rules
      if (cell === 1 && numNeighbors < 2) {
        grid[col][row] = 0;
      } else if (cell === 1 && numNeighbors > 3) {
        grid[col][row] = 0;
      } else if (cell === 0 && numNeighbors === 3) {
        grid[col][row] = 1;
      }
    }
  }
}
