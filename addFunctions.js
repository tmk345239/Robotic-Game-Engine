const folder = './functions/';
const fs = require('fs');
const script = document.createElement('script')

fs.readdir(folder, (err, files) => {
  files.forEach(file => {
    script.src = folder + file;
    document.head.append(script)
    console.log(file);
  });
});