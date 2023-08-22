const fs = require('fs');
const os = require('os');

// Чтение файла
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка при чтении файла:', err);
    return;
  }

  // Переворот строки
  const reversedData = data.split('').reverse().join('');

  // Запись в новый файл
  fs.writeFile('output.txt', reversedData, 'utf8', err => {
    if (err) {
      console.error('Ошибка при записи в файл:', err);
      return;
    }
    console.log('Текст успешно перевернут и записан в output.txt');
  });
});

// Вывод домашней директории
console.log('Домашняя директория:', os.homedir());

// Вывод типа операционной платформы
console.log('Тип операционной платформы:', os.platform());