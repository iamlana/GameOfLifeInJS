import { update } from './update.js'
import { render, setupCanvas } from './render.js'
import { Grid } from './grid.js'
import { COLUMNS, ROWS } from './constants.js'
import { setupMouseListeners } from './setupMouseListeners.js';

export const ctx = setupCanvas();

const grid = new Grid(COLUMNS, ROWS);
grid.randomize();
let updateInterval = 100;
let nextTime = Date.now() + updateInterval;
let running = true;

requestAnimationFrame(onAnimationFrame)
function onAnimationFrame() {
  if (grid.hasChanged) {
    render(ctx, grid);
    grid.hasChanged = false;
  }

  const now = Date.now();

  if (now - nextTime > 5000) {
    nextTime = now
  }

  if (running && now >= nextTime) {
    update(grid);
    nextTime += updateInterval;
  }

  requestAnimationFrame(onAnimationFrame)
}

document.getElementById('play').addEventListener('click', play)
document.getElementById('pause').addEventListener('click', pause)
document.getElementById('speed-two').addEventListener('click', speedTwo)
document.getElementById('speed-four').addEventListener('click', speedFour)
document.getElementById('clear').addEventListener('click', () => grid.clear())
document.getElementById('random').addEventListener('click', () => grid.randomize())

function play() {
  updateInterval = 500;
  running = true;
}

function pause() {
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

setupMouseListeners(ctx.canvas, grid);
