const fs = require('fs');
const path = require('path');

const folderPath = './03-files-in-folder/secret-folder';

fs.readdir(folderPath, (err, files) => {
  if(err) {
    console.error(err);
    return
  }

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    fs.stat(filePath, (err, stats) => {
      if(err) {
        console.error(err);
        return
      }

      if(stats.isFile()) {
        const fileInKb = stats.size / 1024;
        const fileExt = path.extname(file); 
        const fileName = path.basename(file);
        console.log(`${fileName} - ${fileExt} - ${Math.round(fileInKb)}kb`)
      }
    })
  }
)})