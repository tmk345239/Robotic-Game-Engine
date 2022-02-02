const canvas = document.getElementById("id")
var ctx = canvas.getContext("2d");
canvas.focus();

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
  hasMomentum: [],
  hasGravity: [],
}

//testing function
function test(){
  createBox();
  render(0)
}

//square render
function render(id){
  if(id == "all"){
    for(var c=0; c < hitbox.tag.length; c++){
      render(c);
    }
  }
  if(typeof hitbox.color[id] !== 'string'){
    switch(hitbox.prop[id]){
      default:
        ctx.fillStyle = "#424242";
        break;
      case 0:
        ctx.fillStyle = "black";
        break;
      case 1:
        ctx.fillStyle = "yellow";
        break;
    }
  } else {
    ctx.fillStyle = hitbox.color[id];
  }
  ctx.beginPath();
  ctx.fillRect(hitbox.x[id], hitbox.y[id], hitbox.sizeX[id], hitbox.sizeY[id]);
}

//Hitbox Collision Check
function hitCheck(hitID1, hitID2){
  hitbox.farX[hitID1] = hitbox.x[hitID1] + hitbox.sizeX[hitID1]
  hitbox.farY[hitID1] = hitbox.y[hitID1] + hitbox.sizeY[hitID1]
  hitbox.farX[hitID2] = hitbox.x[hitID2] + hitbox.sizeX[hitID2]
  hitbox.farY[hitID2] = hitbox.y[hitID2] + hitbox.sizeY[hitID2]
  if(hitbox.x[hitID1] > hitbox.farX[hitID2] &&
     hitbox.y[hitID1] > hitbox.farY[hitID2] &&
     hitbox.x[hitID2] > hitbox.farX[hitID1] &&
     hitbox.y[hitID2] > hitbox.farY[hitID1]){
    return false;
  }else{
    return true;
  }
}

//Create hitbox
function createBox(x, y, xMove, yMove, sizeX, sizeY, property, tag, color, hasMomentum, hasGravity){
  if(tag === undefined || null){
    hitbox.tag.push(1);
  }else{
  hitbox.tag.push(tag);
  }
  if(property === undefined || null){
    hitbox.prop.push(-1);
  }else{
  hitbox.prop.push(property);
  }
  hitbox.color.push(color);
  if(sizeX === undefined || null){
    hitbox.sizeX.push(50);
    sizeX = 50;
  }else{
  hitbox.sizeX.push(sizeX);
  }
  if(sizeY === undefined || null){
    hitbox.sizeY.push(50);
    sizeY = 50;
  }else{
  hitbox.sizeY.push(sizeY);
  }
  if(x === undefined || null){
    hitbox.x.push(50);
    x = 50;
  }else{
  hitbox.x.push(x);
  }
  if(y === undefined || null){
    hitbox.y.push(50);
    y = 50;
  }else{
  hitbox.y.push(y);
  }
  hitbox.farX.push(x + sizeX);
  hitbox.farY.push(y + sizeY);
  if(xMove === undefined || null){
    hitbox.xMove.push(0);
  }else{
  hitbox.xMove.push(xMove);
  }
  if(yMove === undefined || null){
    hitbox.yMove.push(0);
  }else{
  hitbox.yMove.push(yMove);
  }
  if(hasMomentum === undefined || null){
    hitbox.hasMomentum.push(0);
  }else{
  hitbox.hasMomentum.push(hasMomentum);
  }
  if(yMove === undefined || null){
    hitbox.hasGravity.push(0);
  }else{
  hitbox.hasGravity.push(hasGravity);
  }
}

//delete Hitbox
function deleteHitbox(id){
  hitbox.tag.splice(id,1);
  hitbox.prop.splice(id,1);
  hitbox.color.splice(id,1);
  hitbox.sizeX.splice(id,1);
  hitbox.sizeY.splice(id,1);
  hitbox.x.splice(id,1);
  hitbox.y.splice(id,1);
  hitbox.farX.splice(id,1);
  hitbox.farY.splice(id,1);
  hitbox.xMove.splice(id,1);
  hitbox.yMove.splice(id,1);
  hitbox.hasGravity.splice(id,1);
  hitbox.hasMomentum.splice(id,1);
}

//momentium update
function move(id){
  hitbox.x[id] += hitbox.xMove[id];
  hitbox.y[id] += hitbox.yMove[id];
}

//universial updater
function update(type){
  for(var c=0; c < hitbox.tag.length; c++){
      move(c);
      render(c);
      momentium(c);
    }
}

//changeing momentium
function momentium(id, resist){
  if (hitbox.hasMomentium[id] == 1){
    if (resist === undefined || null){
      resist = 1;
    }
    if (hitbox.xMove[id] < 0){
      hitbox.xMove[id] = -hitbox.xMove[id];
    }
    if (hitbox.yMove[id] < 0){
      hitbox.yMove[id] = -hitbox.yMove[id];
    }
    if (hitbox.yMove[id] >= resist){
      hitbox.xMove[id] -= resist;
    }
    if (hitbox.yMove[id] >= resist){
      hitbox.yMove[id] -= resist;
    }
  }
}
