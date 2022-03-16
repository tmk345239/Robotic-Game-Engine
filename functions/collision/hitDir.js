function hitDir(id1, id2){
    var dir = 0;//0:up,1;down,2;left,3:right
    var output = {
        direction:"none",//can be: up, down, left, or right
        distance:0,//distance in pixles, alwas positive
    }
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

    if(Math.abs(vector.x) > Math.abs(vector.y)){
        dir += 2;
    }

}