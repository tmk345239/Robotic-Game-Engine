//universial updater
function uniUpdate(gForce, airResist, buffer){
    for(var c=0; c < hitbox.tag.length; c++){
      gravity(c, gForce);
      momentium(c, airResist);
      move(c);
      despawn(c, buffer)
      render(c);
    }
}