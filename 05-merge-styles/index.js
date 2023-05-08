const fs = require('fs');
const path = require('path');

const bundle = path.join('./05-merge-styles/project-dist', 'bundle.css');
const styles = path.join('./05-merge-styles/styles');
const bundleStream = fs.createWriteStream(bundle);


fs.readdir(styles, (err, files) => {
  if(err) {
    console.error(err);
    return
  }

  const filesCss = files.filter(file => path.extname(file) === '.css');

  filesCss.forEach(file => {
    const fileStyles = path.join(styles, file);
    const readStyles = fs.createReadStream(fileStyles);
    readStyles.pipe(bundleStream);
  })
})