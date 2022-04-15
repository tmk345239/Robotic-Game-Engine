const canvas = document.getElementById("id")
const ctx = canvas.getContext("2d");
canvas.focus();
const width = 1920;
const height = 1080;

//setting the window size of the canvas
canvas.width = width;
canvas.height = height;

var keys = [];
var keyList = [];
var hitbox = {};
var base = {//hitbox vars & their defaults
  x:50,
  y:50,
  xMove:0,
  yMove:0,
  sizeX:50,
  sizeY:50,
  property:-1,
  tag:1,
  layer:0,
  color:0,
  hasMomentium:false,
  hasGravity:false,
  canDespawn:false,
  stopMove:false,
  intangible:false,
}
for (const prop in base){
  hitbox[prop] = [];
}

var cursor = {
  x: 0,
  y: 0,
}

var files = {
  functions:{
    collision:{
      hitCheck:".js",
      hitDir:".js",
      lineCheck:".js",
      sideCheck:".js",
    },
    movements:{
      gravity:".js",
      momentium:".js",
      move:".js",
    },
    objects:{
      createBox:".js",
      deleteHitbox:".js",
      despawn:".js",
    },
    system:{
      eventLisin:".js",
      render:".js",
      uniUpdate:".js",
    },
    math:{
      rta:".js",
    },
  },
}

const script = document.createElement('script');
script.src = "functions/addFunctions.js";
document.head.prepend(script);
script.setAttribute("defer", "defer");