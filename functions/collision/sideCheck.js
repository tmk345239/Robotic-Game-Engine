function sideCheck(id1, id2, side){
    hitbox.farX[id1] = hitbox.x[id1] + hitbox.sizeX[id1];
    hitbox.farY[id1] = hitbox.y[id1] + hitbox.sizeY[id1];

    switch(side){
    case "up":
        var obj = {
        x:id1.x,
        y:id1.y,
        size:id1.sizeX,
        dir:"x",
      }
      if(lineCheck(id2, obj)){
          return(true);
      }else{
          return(false);
      }
      break;
      case "down":
      var obj = {
          x:id1.x,
          y:id1.farY,
          size:id1.sizeX,
          dir:"x",
        }
        if(lineCheck(id2, obj)){
            return(true);
        }else{
            return(false);
        }
        break;
        case "left":
      var obj = {
          x:id1.x,
          y:id1.y,
          size:id1.sizeY,
          dir:"y",
        }
        if(lineCheck(id2, obj)){
            return(true);
        }else{
            return(false);
        }
        break;
      case "right":
      var obj = {
          x:id1.farX,
          y:id1.y,
          size:id1.sizeY,
          dir:"y",
        }
        if(lineCheck(id2, obj)){
            return(true);
        }else{
            return(false);
        }
        break;
    }
}