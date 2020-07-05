import { PIXELS_PER_CELL } from './constants.js';

export function setupMouseListeners(canvas, grid, reRender) {
  canvas.onmousedown = function (event) {
    canvas.onmousemove = function (event) {
      // var x = event.offsetX;
      // var y = event.offsetY;
      grid.set(1, 3, 1);
      grid.set(2, 3, 1);
      grid.set(3, 3, 1);
      grid.set(3, 2, 1);
      grid.set(2, 1, 1);
    };
    canvas.onmouseup = function () {
      canvas.onmousemove = null;
    };
  };
}
