import { update } from './update.js'
import { render, setupCanvas } from './render.js'
import { buildGrid, clearGrid, randomizeGrid } from './grid.js'

const ctx = setupCanvas();

let grid = buildGrid();
let nextTime = Date.now()

requestAnimationFrame(onAnimationFrame)
function onAnimationFrame() {
  const now = Date.now()
  if (now >= nextTime) {
    update(grid);
    render(ctx, grid);
    if (now > nextTime + 1000) {
      nextTime = now
    }
    nextTime += 1000
  }
  requestAnimationFrame(onAnimationFrame)
}

document.getElementById("speed-two").addEventListener('click', speedTwo)
document.getElementById("speed-four").addEventListener('click', speedFour)
document.getElementById("clear").addEventListener('click', clear)
document.getElementById("random").addEventListener('click', randomize)

function speedTwo() {
  nextTime -= 250
  requestAnimationFrame(speedTwo)
}

function speedFour() {
  nextTime -= 500
  requestAnimationFrame(speedFour)
}

function clear() {
  clearGrid(grid);
  render(ctx, grid);
}

function randomize() {
  randomizeGrid(grid);
}
