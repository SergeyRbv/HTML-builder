const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');
const filePath = path.join('./02-write-file', 'text.txt');

stdout.write('День добрый, какое прекрасное имя Вам дали родители?\n');
stdin.on('data', data => {
  const name = data.toString().trim();
  stdout.write(`\nПривет, ${name}, Вы прекрасный человек!\n`);
  
  if(name === 'exit') {
    stdout.write('До свидания!\n')
    process.exit();
  }
  process.on('SIGINT', () => {
    stdout.write('До новых встреч!\n');
    process.exit();
  })

  fs.appendFile(filePath, name + '/n', (err) => {
    if(err) {
      console.error(err);
      return;
    }
  })
})
