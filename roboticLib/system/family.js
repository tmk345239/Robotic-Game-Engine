import { hitbox } from "../../roboticGameEngine";

export function family(id){
    if(hitbox[id].parent != null){
        var par = hitbox[hitbox[id].parent];
        if (par.parent != null){
            family(hitbox[id].parent);
        }
        /*
        x:50,
        y:50,
        xMove:0,
        yMove:0,
        */
        hitbox[id].x = par.x + hitbox[id].xRel
        hitbox[id].y = par.y + hitbox[id].yRel
        hitbox[id].xMove = par.xMove + hitbox[id].xMoveRel
        hitbox[id].yMove = par.yMove + hitbox[id].yMoveRel
    }
}