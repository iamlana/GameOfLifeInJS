import { update } from './update.js'
import { render, setupCanvas } from './render.js'
import { buildGrid, clearGrid, randomizeGrid } from './grid.js'

const ctx = setupCanvas();

let grid = buildGrid();
let nextTime = Date.now();
let updateInterval = 500;
let running = false;

requestAnimationFrame(onAnimationFrame)
function onAnimationFrame() {
  const now = Date.now();
  if (running && now >= nextTime) {
    update(grid);
    if (now > nextTime + updateInterval) {
      nextTime = now
    }
    nextTime += updateInterval;
  }
  render(ctx, grid);
  requestAnimationFrame(onAnimationFrame)
}

document.getElementById('play').addEventListener('click', play)
document.getElementById('pause').addEventListener('click', pause)
document.getElementById('speed-two').addEventListener('click', speedTwo)
document.getElementById('speed-four').addEventListener('click', speedFour)
document.getElementById('clear').addEventListener('click', clear)
document.getElementById('random').addEventListener('click', randomize)

function play () {
  updateInterval = 500;
  running = true;
}

function pause () {
  running = false;
}

function speedTwo() {
  updateInterval = 250;
  running = true;
}

function speedFour() {
  updateInterval = 125;
  running = true;
}

function clear() {
  clearGrid(grid);
  render(ctx, grid);
}

function randomize() {
  randomizeGrid(grid);
}
