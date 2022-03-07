const files = {
  functions:[
    "createBox",
    "deleteHitbox",
    "despawn",
    "eventLisin",
    "gravity",
    "hitCheck",
    "momentium",
    "move",
    "render",
    "uniUpdate",
    "rta",
  ],
  testing:".js",
}

for (const folder in files){
  if(Array.isArray(files[folder])){
    files[folder].forEach(file => {
      const script = document.createElement('script');
      script.src = folder + "/" + file + ".js";
      document.head.prepend(script);
      script.setAttribute("defer", "defer");
    });
  }else{
    const script = document.createElement('script');
    script.src = folder + files[folder];
    document.head.prepend(script);
    script.setAttribute("defer", "defer");
  }
};