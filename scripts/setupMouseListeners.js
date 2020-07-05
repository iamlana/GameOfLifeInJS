import { PIXELS_PER_CELL } from './constants.js';

export function setupMouseListeners(canvas, grid) {
  let drawing = false

  canvas.addEventListener('mousedown', function (event) {
    drawing = true
    draw(event)
  })

  canvas.addEventListener('mousemove', function (event) {
    if (drawing) {
      draw(event)
    }
  })

  canvas.addEventListener('mouseup', function () {
    drawing = false
  })

  function draw (event) {
    var x = Math.floor(event.offsetX / PIXELS_PER_CELL);
    var y = Math.floor(event.offsetY / PIXELS_PER_CELL);
    grid.set(x, y, 1);
  }
}
