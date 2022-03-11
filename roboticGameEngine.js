const canvas = document.getElementById("id")
const ctx = canvas.getContext("2d");
canvas.focus();
const width = canvas.width;
const height = canvas.height;


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
    createBox:".js",
    deleteHitbox:".js",
    despawn:".js",
    eventLisin:".js",
    gravity:".js",
    hitCheck:".js",
    momentium:".js",
    move:".js",
    render:".js",
    uniUpdate:".js",
    rta:".js",
  },
}
var scr = document.scripts;
for (const file in scr){
  if (scr[file].src != "roboticGameEngine.js" || undefined){
    var res = scr[file].src//removed element's source
    scr[file].remove();
    //add res to files
    var L = res.length;
    var pos = res.indexOf(".");
    var typ = res.slice(pos, L);
    var fle = res.slice(0, pos);
    files[fle] = typ;
  }
}

const script = document.createElement('script');
script.src = "functions/addFunctions.js";
document.head.prepend(script);
script.setAttribute("defer", "defer");