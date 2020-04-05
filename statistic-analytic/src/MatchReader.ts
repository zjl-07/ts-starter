import CsvReader from "./CsvReader";
import { dateStringToDate } from "./utils";
import { MatchResult, MatchData } from "./MatchData";

interface DataReader {
  read(): string[][];
}

export default class MatchReader {
  static matchReaderWithCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvReader(fileName));
  }

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
