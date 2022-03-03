//Create hitbox

function createBox(boxObj){
  for (const prop in base){
    if(boxObj[prop] === undefined || null){
      boxObj[prop] = base[prop];
    }
    hitbox[prop].push(boxObj[prop]);
    console.log(hitbox[prop]);
  }
}