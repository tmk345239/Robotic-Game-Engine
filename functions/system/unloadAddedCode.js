var scr = document.scripts;
for (const file in scr){
    var temp = true;
    if (temp){
      temp = false;
      console.log(scr[file].getAttribute("defer"));
    }
    if (scr[file].getAttribute("defer") == null || undefined){
      scr[file].defer = "defer";
    }
  }