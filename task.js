var words = ['Ночь', 'Улица', 'Фонарь', 'Аптека', 'Бессмысленный', 'Тусклый', 'Свет'];

getLastElementOfArray(words); // возвращает Свет;

function getLastElementOfArray(array) {
  let last = array[words.length - 1]; 
  return last
}

console.log(getLastElementOfArray(words));
