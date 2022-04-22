var path = []

function addFolder(folder){
  for (const file in folder){
    if(Array.isArray(folder[file])){
      path.push(folder.name + "/");//need to test output
      addFolder(folder[file]);
    }else if(folder[file] != folder.name){
      const script = document.createElement('script');
      script.src = path.join + file + folder[file];
      document.head.prepend(script);
      script.setAttribute("defer", "defer");
    }
  };
  var last = path.length - 1;
  path.splice(last,1);
}
addFolder(files.functions);


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