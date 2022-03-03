//delete Hitbox
function deleteHitbox(id){
  for (const prop in base){
    hitbox[prop].splice(id,1);
  }
  /*
  hitbox.tag.splice(id,1);
  hitbox.prop.splice(id,1);
  hitbox.color.splice(id,1);
  hitbox.sizeX.splice(id,1);
  hitbox.sizeY.splice(id,1);
  hitbox.x.splice(id,1);
  hitbox.y.splice(id,1);
  hitbox.farX.splice(id,1);
  hitbox.farY.splice(id,1);
  hitbox.xMove.splice(id,1);
  hitbox.yMove.splice(id,1);
  hitbox.hasGravity.splice(id,1);
  hitbox.hasMomentium.splice(id,1);
  hitbox.despawn.splice(id,1);
  */
}