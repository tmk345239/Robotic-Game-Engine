//universial updater
function uniUpdate(gForce, airResist, buffer){
  var maxLay = 2;
  for(var c=0; c < hitbox.layer.length; c++){//set max layer value
    if(hitbox.layer[c] > maxLay){
      maxLay = hitbox.layer[c];
    }
  }


  for(var t=0; t <= maxLay; t++){
    for(var c=0; c < hitbox.tag.length; c++){
      if(hitbox.layer[c] !== undefined || null){
        if(hitbox.layer[c] == t){
          gravity(c, gForce);
          momentium(c, airResist);
          if(hitbox.prop[c] != 1){
            if (game == true){
              move(c);
            }
          }else {
            move(c);
          }
          despawn(c, buffer);
          render(c);
        }
      }
    }
  }
}