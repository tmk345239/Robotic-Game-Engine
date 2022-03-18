function hitDir(id1, id2){
    var dir = 0;//0:up,1;down,2;left,3:right
    var output = {
        direction:"none",//can be: up, down, left, or right
        distance:0,//distance in pixles, alwas positive
    }
    var hitList = []//list of hit directions
    hitbox.farX[id1] = hitbox.x[id1] + hitbox.sizeX[id1]//--\
    hitbox.farY[id1] = hitbox.y[id1] + hitbox.sizeY[id1]//   \update far cords.
    hitbox.farX[id2] = hitbox.x[id2] + hitbox.sizeX[id2]//   /
    hitbox.farY[id2] = hitbox.y[id2] + hitbox.sizeY[id2]//--/

    //center cords
    const center = {
        id1x:hitbox.x[id1] + (hitbox.sizeX[id1] / 2),
        id1y:hitbox.y[id1] + (hitbox.sizeY[id1] / 2),

        id2x:hitbox.x[id2] + (hitbox.sizeX[id2] / 2),
        id2y:hitbox.y[id2] + (hitbox.sizeY[id2] / 2),
    }

    //relitive vector
    const vector = {
        x:center.id2x - center.id1x,
        y:center.id2y - center.id1y,
    }

    //up,down,left,right, side check
    var obj = {
      x:id1.x,
      y:id1.y,
      size:id1.sizeX,
      dir:"x",
    }
    if(lineCheck(id2, obj)){
        hitList.push("up");
    }
    //down
    var obj = {
        x:id1.x,
        y:id1.farY,
        size:id1.sizeX,
        dir:"x",
      }
      if(lineCheck(id2, obj)){
          hitList.push("down");
      }
    //left
    var obj = {
        x:id1.x,
        y:id1.y,
        size:id1.sizeY,
        dir:"y",
      }
      if(lineCheck(id2, obj)){
          hitList.push("left");
      }
    //right
    var obj = {
        x:id1.farX,
        y:id1.y,
        size:id1.sizeY,
        dir:"y",
      }
      if(lineCheck(id2, obj)){
          hitList.push("right");
      }
    switch(hitList.length){
        case 0:
            output == "none";
            break;
        case 1:
            
    }
}