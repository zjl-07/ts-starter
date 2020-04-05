import fs from "fs";

export default abstract class CsvReader<T> {
  data: T[] = [];

  constructor(public filePath: string) {}

  abstract mapRow(row: string[]): T;

  read = (): T[] =>
    (this.data = fs
      .readFileSync(this.filePath, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map((row: string[]): any => this.mapRow(row)));
}
