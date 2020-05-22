import { COLUMNS, ROWS } from './constants.js';

export function update(grid) {
  const nextGeneration = grid.map(arr => [...arr]);

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];
      let numNeighbors = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue;
          }
          const x_cell = col + i;
          const y_cell = row + j;

          if (x_cell >= 0 && y_cell >= 0 && x_cell < COLUMNS && y_cell < ROWS) {
            const currentNeighbor = grid[col + i][row + j]
            numNeighbors += currentNeighbor;
          }
        }
      }
      //rules
      if (cell === 1 && numNeighbors < 2) {
        nextGeneration[col][row] = 0;
      } else if (cell === 1 && numNeighbors > 3) {
        nextGeneration[col][row] = 0;
      } else if (cell === 0 && numNeighbors === 3) {
        nextGeneration[col][row] = 1;
      }
    }
  }

  return nextGeneration
}
