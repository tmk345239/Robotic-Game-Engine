//motion update
function move(id){
    if(hitbox.intangible[id] == false){//check for tangability

        //better method is to check shortest distance out of coliding object.

        hitbox.x[id] += hitbox.xMove[id];
        for (var id2=0; id2 < hitbox.tag.length; id2++){//check if x hit
            if(hitbox.stopMove[id2]){
                if(hitCheck(id, id2)){
                    hitbox.x[id] -= hitbox.xMove[id];//undo move
                }
            }
        }

        hitbox.y[id] += hitbox.yMove[id];
        for (var id2=0; id2 < hitbox.tag.length; id2++){//check if y hit
            if(hitbox.stopMove[id2]){
                if(hitCheck(id, id2)){
                    hitbox.y[id] -= hitbox.yMove[id];//undo move
                    if(Math.sign(hitbox.yMove[id]) == 1){

                    }
                }
            }
        }
    }else{
        hitbox.x[id] += hitbox.xMove[id];
        hitbox.y[id] += hitbox.yMove[id];
    }
}