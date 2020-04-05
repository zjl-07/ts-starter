import fs from "fs";

export default class CsvReader {
  data: string[][] = [];

  constructor(public filePath: string) {}

  read = () =>
    (this.data = fs
      .readFileSync(this.filePath, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((row: string): string[] => row.split(",")));
}
