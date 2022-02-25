//universial updater
function uniUpdate(gForce, airResist, buffer){
  var maxTag = 2;
  for(var c=0; c < hitbox.tag.length; c++){//set max tag value
    if(hitbox.tag[c] > maxTag){
      maxtag = hitbox.tag[c];
    }
  }


  for(var t=0; t <= maxTag; t++){
    for(var c=0; c < hitbox.tag.length; c++){
      if(hitbox.tag[c] !== undefined || null){
        if(hitbox.tag[c] == t){
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