var path = []


function addFolder(folder){
  for (const file in folder){
    if(Array.isArray(folder[file])){
      path.push(folder + "/");//need to test output
      addFolder(folder[file]);
    }else{
      const script = document.createElement('script');
      script.src = path.join + file + folder[file];
      document.head.prepend(script);
      script.setAttribute("defer", "defer");
    }
  };
  var last = path.length - 1;
  path.splice(last,1);
}