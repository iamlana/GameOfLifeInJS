import { PIXELS_PER_CELL } from './constants.js';

export function setupMouseListeners(canvas, grid, reRender) {
  canvas.onmousedown = function (event) {
    canvas.onmousemove = function (event) {
      var x = Math.floor(event.offsetX/PIXELS_PER_CELL);
      var y = Math.floor(event.offsetY/PIXELS_PER_CELL);
      grid.set(x, y, 1);
    };
    canvas.onmouseup = function () {
      canvas.onmousemove = null;
    };
  };
}
