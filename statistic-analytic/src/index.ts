import MatchReader from "./MatchReader";
import { MatchResult } from "./MatchReader";

const footballGameData = new MatchReader("football.csv").read();

let winCount = 0;
footballGameData.forEach(([_, HomeTeam, AwayTeam, _, _, matchResult]) => {
  if (
    (HomeTeam === "Man United" && matchResult === MatchResult.HOME_WIN) ||
    (AwayTeam === "Man United" && matchResult === MatchResult.AWAY_WIN)
  ) {
    winCount++;
  }
});

console.log(`Total Manchested Win 20 - 30 : ${winCount} times`);
