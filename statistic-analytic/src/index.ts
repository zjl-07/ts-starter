import fs from "fs";

//async file reading
const data = fs
  .readFileSync("oscar-female-winner.csv", {
    encoding: "utf-8"
  })
  .split("\n")
  .map((row) => {
    return row.split(",");
  });

console.log(data); 