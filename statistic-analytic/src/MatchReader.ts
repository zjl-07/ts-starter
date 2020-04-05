import { dateStringToDate } from "./utils";
import { MatchResult } from "./index";

interface DataReader {
  read(): string[][];
}

type MatchData = [Date, string, string, number, number, MatchResult, string];

export default class MatchReader {
  data: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load() {
    const data = this.reader.read();
    this.data = data.map((row: string[]): any => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ];
    });
  }
}
