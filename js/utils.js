// Обрезка строки о указанного количества символов
const truncateString = (string, length) => {
  const cropped = (length >= string.length) ? string.padEnd(length, ` `) : string.slice(0, length - 3) + `...`;
  return cropped;
};

// Уменьшение размера шрифта в зависимости от кол-ва символов? Или длины строки?
