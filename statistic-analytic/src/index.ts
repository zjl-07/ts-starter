import fs from "fs";

const data: string[][] = fs
  .readFileSync("oscar-female-winner.csv", {
    encoding: "utf-8"
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

// 1 Analys : winner from age 20-30
let winCount = 0;
data.forEach((colomn) => {
  if (parseInt(colomn[2]) > 20 && parseInt(colomn[2]) < 30) {
    winCount++;
  }
});

console.log(`Total winner age range from 20-30 : ${winCount} people`);
