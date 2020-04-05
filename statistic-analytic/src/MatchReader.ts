import CsvReader from "./CsvReader";
import { dateStringToDate } from "./utils";

export enum MatchResult {
  HOME_WIN = "H",
  AWAY_WIN = "A",
  DRAW = "D"
}

type MatchDataType = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export default class MatchReader extends CsvReader<MatchDataType> {
  mapRow(row: string[]): MatchDataType {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ];
  }
}
