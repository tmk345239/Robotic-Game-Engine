var scr = document.scripts;
for (const file in scr){
    var temp = true;
    if (temp){
      temp = false;
      console.log(scr[file].getAttribute("src"));
    }
    if (scr[file].getAttribute("src") != "roboticGameEngine.js" || scr[file].getAttribute("src") != undefined || null){
      var res = scr[file].getAttribute("src")//removed element's source
      scr[file].remove();
      //add res to files
      var L = res.length;
      var pos = res.indexOf(".");
      var typ = res.slice(pos, L);
      var fle = res.slice(0, pos);
      files[fle] = typ;
    }
  }