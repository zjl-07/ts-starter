import fs from "fs";

export default class CsvReader {
  constructor(public filePath: string) {}

  read = () =>
    fs
      .readFileSync(this.filePath, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((row: string): string[] => row.split(","));
}
