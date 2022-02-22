const canvas = document.getElementById("id")
const ctx = canvas.getContext("2d");
canvas.focus();
const width = canvas.width;
const height = canvas.height;
canvas.addEventListener("keydown", (event)=>{
  keys.push(event.keyCode);
  keyList.push(event.keyCode);
});
canvas.addEventListener("keyup", (event)=>{
  let id = 0;
  var done = false;
  while(done == false){
    if(keys[id] == event.keyCode){
      keys.splice(id,1);
      done = true;
    }else{
      id++;
    }
  }
});


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
canvas.addEventListener("mousemove", updateCursorPos);
function updateCursorPos(event){
  cursor = getMousePos(canvas, event);
  function getMousePos(canvas, event){
    var rect = canvas.getBoundingClientRect(),
      scaleX = canvas.width / rect.width,
      scaleY = canvas.height / rect.height;
    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY
    }
  }
}