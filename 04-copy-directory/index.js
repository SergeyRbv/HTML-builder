const fs = require('fs');
const path = require('path');
const filesCopy = path.join('./04-copy-directory/files-copy');
const filesRead = './04-copy-directory/files';
// const filesCopy = 'files-copy';

fs.mkdir(filesCopy, (err) => {
  if(err) {
    console.error(err);
    return;
  }

  console.log(`Create new folder "files-copy"`);
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