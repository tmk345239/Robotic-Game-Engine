//delete Hitbox
function deleteHitbox(id){
  for (const prop in base){
    hitbox[prop].splice(id,1);
  }
}