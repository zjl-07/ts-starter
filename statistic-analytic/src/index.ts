import MatchReader from "./MatchReader";
import CsvReader from "./CsvReader";

export enum MatchResult {
  HOME_WIN = "H",
  AWAY_WIN = "A",
  DRAW = "D"
}

const csvReader = new CsvReader("football.csv");
const matchReader = new MatchReader(csvReader);
matchReader.load();

let winCount = 0;
matchReader.data.forEach(([_, HomeTeam, AwayTeam, _, _, matchResult]) => {
  if (
    (HomeTeam === "Man United" && matchResult === MatchResult.HOME_WIN) ||
    (AwayTeam === "Man United" && matchResult === MatchResult.AWAY_WIN)
  ) {
    winCount++;
  }
});

console.log(`Total Manchested Win 20 - 30 : ${winCount} times`);
