function hitDir(id1, id2){
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
        id1:hitbox.x[id1] + (hitbox.sizeX[id1] / 2),
        id2:hitbox.x[id2] + (hitbox.sizeX[id2] / 2),
    }
}