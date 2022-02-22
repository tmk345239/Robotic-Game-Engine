//Create hitbox
function createBox(x, y, xMove, yMove, sizeX, sizeY, property, tag, color, hasMomentium, hasGravity, canDespawn){
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
      if(sizeX < 0){
        sizeX = -sizeX;
        x -= sizeX;
      }
    hitbox.sizeX.push(sizeX);
    }
    if(sizeY === undefined || null){
      hitbox.sizeY.push(50);
      sizeY = 50;
    }else{
      if(sizeY < 0){
        sizeY = -sizeY;
        y -= sizeY;
      }
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
    if(hasMomentium === undefined || null){
      hitbox.hasMomentium.push(false);
    }else{
    hitbox.hasMomentium.push(hasMomentium);
    }
    if(hasGravity === undefined || null){
      hitbox.hasGravity.push(false);
    }else{
    hitbox.hasGravity.push(hasGravity);
    }
    if(canDespawn === undefined || null){
      hitbox.despawn.push(false);
    }else{
    hitbox.despawn.push(canDespawn);
    }
  }