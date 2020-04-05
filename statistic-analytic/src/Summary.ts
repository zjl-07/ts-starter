import { MatchData } from "./MatchData";

export interface Analyzer {
  run(data: string[][] | MatchData[]): string;
}

export interface Report {
  print(statement: string): void;
}

export default class Summary {
  constructor(public analyzer: Analyzer, public report: Report) {}

  buildAndReport(data: string[][] | MatchData[]) {
    const analyzerResult = this.analyzer.run(data);
    this.report.print(analyzerResult);
  }
}
