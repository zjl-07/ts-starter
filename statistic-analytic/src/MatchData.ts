export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export enum MatchResult {
  HOME_WIN = "H",
  AWAY_WIN = "A",
  DRAW = "D"
}
