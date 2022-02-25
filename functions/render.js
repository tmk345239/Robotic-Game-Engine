//square render
function render(id){
  if(typeof hitbox.color[id] !== 'string'){
    switch(hitbox.color[id]){
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