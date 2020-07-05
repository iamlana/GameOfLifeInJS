import { PIXELS_PER_CELL } from './constants.js';

export function setupMouseListeners(canvas, ctx) {
  canvas.onmousedown = function (event) {
    canvas.onmousemove = function (event) {
      var x = event.offsetX;
      var y = event.offsetY;
      ctx.beginPath();
      ctx.rect(x, y, PIXELS_PER_CELL, PIXELS_PER_CELL);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.stroke();
    };
    canvas.onmouseup = function () {
      canvas.onmousemove = null;
    };
  };
}
