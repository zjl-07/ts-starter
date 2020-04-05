import { Analyzer } from "../Summary";
import { MatchData, MatchResult } from "../MatchData";

export default class WinAnalyzer implements Analyzer {
  constructor(public teamName: string) {}

  run(data: MatchData[]): string {
    let win = 0;

    data.forEach(([, HomeTeam, AwayTeam, , , matchResult]) => {
      if (
        (HomeTeam === this.teamName && matchResult === MatchResult.HOME_WIN) ||
        (AwayTeam === this.teamName && matchResult === MatchResult.AWAY_WIN)
      ) {
        win++;
      }
    });

    return `${this.teamName} wins : ${win} games`;
  }
}
