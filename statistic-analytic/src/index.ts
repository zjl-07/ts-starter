import CsvReader from "./CsvReader";

const data = new CsvReader("oscar-female-winner.csv").read();
// 1 counting winner from age 20-30
let winCount = 0;
data.forEach((colomn) => {
  let age = parseInt(colomn[2]);
  age > 20 && age < 30 && winCount++;
});

console.log(`Total winner age range from 20 - 30 : ${winCount} people`);
