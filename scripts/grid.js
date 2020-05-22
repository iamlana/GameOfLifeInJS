import { COLUMNS, ROWS } from './constants.js';

export function buildGrid() {
  return new Array(COLUMNS).fill(null)
    .map(() => new Array(ROWS).fill(null)
      .map(() => Math.floor(Math.random() * 2)));
}

export function clearGrid(grid) {
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      grid[col][row] = 0;
    }
  }
}

export function randomizeGrid(grid) {
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      grid[col][row] = Math.floor(Math.random() * 2);
    }
  }
}