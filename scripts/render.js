import { COLUMNS, ROWS, PIXELS_PER_CELL } from './constants.js';

export function setupCanvas () {
  const canvas = document.querySelector('canvas');
  canvas.height = COLUMNS * PIXELS_PER_CELL;
  canvas.width = ROWS * PIXELS_PER_CELL;
  return canvas.getContext('2d');
}

export function render(ctx, grid) {
  grid.forEach((col, row) => {
    const cell = grid.get(col, row);
    ctx.beginPath();
    ctx.rect(col * PIXELS_PER_CELL, row * PIXELS_PER_CELL, PIXELS_PER_CELL, PIXELS_PER_CELL);
    ctx.fillStyle = cell ? 'black' : 'white';
    ctx.fill();
    ctx.stroke();
  });
}
