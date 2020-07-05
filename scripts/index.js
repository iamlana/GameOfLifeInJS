import { update } from './update.js'
import { render, setupCanvas } from './render.js'
import { Grid } from './grid.js'
import { COLUMNS, ROWS } from './constants.js'
import { setupMouseListeners } from './setupMouseListeners.js';

export const ctx = setupCanvas();

const grid = new Grid(COLUMNS, ROWS);
grid.randomize();
let nextTime = Date.now();
let updateInterval = 500;
let running = true;

requestAnimationFrame(onAnimationFrame)
function onAnimationFrame() {
  const now = Date.now();
  if (running && now >= nextTime) {
    render(ctx, grid);
    update(grid);
    if (now > nextTime + updateInterval) {
      nextTime = now
    }
    nextTime += updateInterval;
  }
  requestAnimationFrame(onAnimationFrame)
}

document.getElementById('play').addEventListener('click', play)
document.getElementById('pause').addEventListener('click', pause)
document.getElementById('speed-two').addEventListener('click', speedTwo)
document.getElementById('speed-four').addEventListener('click', speedFour)
document.getElementById('clear').addEventListener('click', clear)
document.getElementById('random').addEventListener('click', randomize)

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

function clear() {
  grid.clear();
  render(ctx, grid);
}

function randomize() {
  grid.randomize();
  render(ctx, grid);
}

setupMouseListeners(ctx.canvas, ctx);
