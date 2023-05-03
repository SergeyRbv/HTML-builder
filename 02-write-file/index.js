const { stdin, stdout } = process;

stdout.write('День добрый, какое прекрасное имя Вам дали родители?\n');
stdin.on('data', data => {
  const name = data.toString();
  stdout.write(`\nПривет, ${name}, Вы прекрасный человек!`);
  process.exit();
})
