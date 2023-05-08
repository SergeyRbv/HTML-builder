const fs = require('fs-extra');
const path = require('path');

const project = path.join('./06-build-page/project-dist');
const style = path.join('./06-build-page/project-dist', 'style.css');
const styleStream = fs.createWriteStream(style);

const folderStyles = path.join('./06-build-page/styles');
const assets = path.join('./06-build-page/assets');
const assetsCopy = path.join('./06-build-page/project-dist/assets');

const template = path.join('./06-build-page/template.html');
const components = path.join('./06-build-page/components');
const index = path.join('./06-build-page/project-dist/index.html');


fs.mkdir(project, err => {
  if(err) {
    console.error(err);
    return;
  }
})

fs.mkdir(assetsCopy, err => {
  if(err) {
    console.error(err);
    return;
  }
})

fs.readdir(assets, (err, files) => {
  if(err) {
    console.error(err);
    return;
  }

  files.forEach(file => {
    const folderAssets = path.join(assets, file);
    const copyAssets = path.join(assetsCopy, file);

    fs.copy(folderAssets, copyAssets, err => {
      if(err) {
        console.error(err);
        return;
      }
    })
  })
})

fs.readdir(folderStyles, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach(file => {
    const fileStyles = path.join(folderStyles, file);
    const readStyles = fs.createReadStream(fileStyles);
    readStyles.pipe(styleStream);
  })
})

fs.readFile(template, 'utf-8', (err, templateContent) => {
  if(err) {
    console.error(err);
    return;
  }

  fs.readdir(components, (err, files) => {
    if(err) {
      console.error(err);
      return;
    }
  
    let count = 0;

    files.forEach(file => {
      const fileComponents = path.join(components, file);

      fs.readFile(fileComponents, (err, content) => {
        if(err) {
          console.error(err);
          return;
        }

        const name = `{{${path.parse(file).name}}}`;
        templateContent  = templateContent.replace(name, content);

        count++;

        if(count === files.length){
          fs.writeFile(index, templateContent , err => {
            if(err) {
              console.error(err);
              return;
            }
          })
        }
      }) 
    })
  })
})