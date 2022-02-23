const folder = 'functions/';
var files = [
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
]

console.log(files)
files.forEach(file => {
  const script = document.createElement('script');
  script.src = folder + file + ".js";
  document.head.append(script);
  script.setAttribute("defer", "defer");
  console.log(file);
});