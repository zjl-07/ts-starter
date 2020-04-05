import CsvReader from "./CsvReader";

const footballGameData = new CsvReader("football.csv").read();

//count how many time man united won
enum MatchResult {
  HOME_WIN = "H",
  AWAY_WIN = "A",
  DRAW = "D"
}

let winCount = 0;
footballGameData.forEach(([HomeTeam, AwayTeam, _, _, matchResult]) => {
  if (
    (HomeTeam === "Man United" && matchResult === MatchResult.HOME_WIN) ||
    (AwayTeam === "Man United" && matchResult === MatchResult.AWAY_WIN)
  ) {
    winCount++;
  }
});

console.log(`Total Manchested Win 20 - 30 : ${winCount} times`);
