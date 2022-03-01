const arr = [17, 23, 31, 44, 59];

doubleNumber(arr); // возвращает [34,46,62,88,118];

console.log(doubleNumber(arr));

function doubleNumber(array) {
  return array.map(function(num) {
    return num * 2;
  });
}
