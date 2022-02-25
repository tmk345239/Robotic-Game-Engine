const canvas = document.getElementById("id")
const ctx = canvas.getContext("2d");
canvas.focus();
const width = canvas.width;
const height = canvas.height;


var keys = [];
var keyList = [];
var hitbox = {
  tag: [],
  prop: [],
  color: [],
  sizeX: [],
  sizeY: [],
  x: [],
  y: [],
  farX: [],
  farY: [],
  xMove: [],
  yMove: [],
  hasMomentium: [],
  hasGravity: [],
  despawn: [],
}
var cursor = {
  x: 0,
  y: 0,
}

const script = document.createElement('script');
script.src = "functions/addFunctions.js";
document.head.append(script);
script.setAttribute("defer", "defer");