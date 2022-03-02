//Create hitbox
var atts = [
  "x",//50,
  "y",//50,
  "xMove",//0,
  "yMove",//0,
  "sizeX",//:50,
  "sizeY",//:50,
  "property",//:-1,
  "tag",//:1,
  "layer",//:0,
  "color",//:0,
  "hasMomentium",//:false,
  "hasGravity",//:false,
  "canDespawn",//:false,
]
var base = {
  x:50,
  y:50,
  xMove:0,
  yMove:0,
  sizeX:50,
  sizeY:50,
  property:-1,
  tag:1,
  layer:0,
  color:0,
  hasMomentium:false,
  hasGravity:false,
  canDespawn:false,
}

function createBox(boxObj){
  var ele;
  /*for (const property in base){
    console.log(base[property]);
  } to be tested
  
  */
  for(var at = 0; at < atts.length; at++){
    ele = atts[at];
    if(boxObj.ele === undefined || null){
      boxObj.ele == base.ele;
    }
    console.log(ele);
    hitbox.ele.push(boxObj.ele);
  };
  /*

  //tag
    if(boxObj.tag === undefined || null){
      hitbox.tag.push(1);
    }else{
    hitbox.tag.push(boxObj.tag);
    }

    //property
    if(boxObj.property === undefined || null){
      hitbox.prop.push(-1);
    }else{
    hitbox.prop.push(boxObj.property);
    }

    //layer
    if(boxObj.layer === undefined || null){
      hitbox.layer.push(0);
    }else{
    hitbox.layer.push(boxObj.layer);
    }

    //color
    if(boxObj.color === undefined || null){
      hitbox.color.push(0);
    }else{
    hitbox.color.push(boxObj.color);
    }

    //sizeX
    if(boxObj.sizeX === undefined || null){
      hitbox.sizeX.push(50);
      boxObj.sizeX = 50;
    }else{
      if(boxObj.sizeX < 0){
        boxObj.sizeX = -boxObj.sizeX;
        x -= boxObj.sizeX;
      }
    hitbox.sizeX.push(boxObj.sizeX);
    }

    //sizeY
    if(boxObj.sizeY === undefined || null){
      hitbox.sizeY.push(50);
      boxObj.sizeY = 50;
    }else{
      if(boxObj.sizeY < 0){
        boxObj.sizeY = -boxObj.sizeY;
        y -= boxObj.sizeY;
      }
    hitbox.sizeY.push(boxObj.sizeY);
    }

    //x
    if(boxObj.x === undefined || null){
      hitbox.x.push(50);
      boxObj.x = 50;
    }else{
    hitbox.x.push(boxObj.x);
    }

    //y
    if(boxObj.y === undefined || null){
      hitbox.y.push(50);
      boxObj.y = 50;
    }else{
    hitbox.y.push(boxObj.y);
    }

    //far values
    hitbox.farX.push(boxObj.x + boxObj.sizeX);
    hitbox.farY.push(boxObj.y + boxObj.sizeY);

    //xMove
    if(boxObj.xMove === undefined || null){
      hitbox.xMove.push(0);
    }else{
    hitbox.xMove.push(boxObj.xMove);
    }

    //yMove
    if(boxObj.yMove === undefined || null){
      hitbox.yMove.push(0);
    }else{
    hitbox.yMove.push(boxObj.yMove);
    }

    //hasMomentium
    if(boxObj.hasMomentium === undefined || null){
      hitbox.hasMomentium.push(false);
    }else{
    hitbox.hasMomentium.push(boxObj.hasMomentium);
    }

    //hasGravity
    if(boxObj.hasGravity === undefined || null){
      hitbox.hasGravity.push(false);
    }else{
    hitbox.hasGravity.push(boxObj.hasGravity);
    }

    //canDespawn
    if(boxObj.canDespawn === undefined || null){
      hitbox.despawn.push(false);
    }else{
    hitbox.despawn.push(boxObj.canDespawn);
    }
    */
  }