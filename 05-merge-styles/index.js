const fs = require('fs');
const path = require('path');
const bandle = path.join('./05-merge-styles/project-dist/bandle.css');
const projectDist = './05-merge-styles/project-dist';
// const filesCopy = 'files-copy';

fs.mkdir(bandle, (err) => {
  if(err) {
    console.error(err);
    return;
  }

  console.log(`Create new folder "bandle"`);
});

fs.readdir(filesRead, (err, files) => {
  if(err) {
    console.error(err);
    return
  }

  files.forEach((file) => {
    const filePath = path.join(filesRead, file);
    const copyFilePath = path.join(filesCopy, file);
    const fileStream = fs.createReadStream(filePath);
    const copyStream = fs.createWriteStream(copyFilePath);

    fileStream.pipe(copyStream);
  })
})