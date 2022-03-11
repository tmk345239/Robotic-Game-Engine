//motion update
function move(id){
    if(hitbox.intangible[id] == true){//check for tangability
        hitbox.x[id] += hitbox.xMove[id];
        hitbox.y[id] += hitbox.yMove[id];
    }else{
        for (var id2=0; id2 < hitbox.tag.length; id2++){
            if(hitbox.stopMove[id2] == true){
                if(hitCheck(id, id2) == true){

                }else{
                    hitbox.x[id] += hitbox.xMove[id];
                    hitbox.y[id] += hitbox.yMove[id];
                }
            }
        }
    }
}