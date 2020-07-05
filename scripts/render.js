import { COLUMNS, ROWS, PIXELS_PER_CELL } from './constants.js';

export function setupCanvas() {
  const canvas = document.querySelector('canvas');
  canvas.height = COLUMNS * PIXELS_PER_CELL;
  canvas.width = ROWS * PIXELS_PER_CELL;
  return canvas.getContext('2d');
}

export function render(ctx, grid) {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.fillStyle = 'white'
  grid.forEach((col, row) => {
    const cell = grid.get(col, row);
    if (cell === 1) {
      ctx.beginPath()
      ctx.arc(
        col * PIXELS_PER_CELL + PIXELS_PER_CELL / 2,
        row * PIXELS_PER_CELL + PIXELS_PER_CELL / 2,
        PIXELS_PER_CELL / 2,
        0,
        Math.PI * 2,
      )
      ctx.fill()
    }
  });
}
