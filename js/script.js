const guestsInfo = [
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
]


let ageSum = 0;
const len = guestsInfo.length;
let item = null;
for (let i = 0; i < len; i++) {
    item = guestsInfo[i];
    ageSum = item.age + ageSum;
        
}
const averageage = ageSum / len;
console.log("Average age:", averageage);




