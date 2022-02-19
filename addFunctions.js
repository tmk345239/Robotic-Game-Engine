const folder = './functions/';
var fs = require('fs');
const script = document.createElement('script');
var files = fs.readdirSync('./functions/');

console.log(files)
fs.readdir(folder, (err, files) => {
  files.forEach(file => {
    script.src = folder + file;
    document.head.append(script)
    console.log(file);
  });
});