import { MatchData } from "./MatchData";
import WinAnalyzer from "./analyzer/WinAnalyzer";
import ConsoleReport from "./reporter/ConsoleReport";
import HtmlReport from "./reporter/HtmlReport";

export interface Analyzer {
  run(data: string[][] | MatchData[]): string;
}

export interface Report {
  print(statement: string): void;
}

export default class Summary {
  static generateReportWithConsole(teamName: string): Summary {
    return new Summary(new WinAnalyzer(teamName), new ConsoleReport());
  }

  static generateReportWithHtml(teamName: string): Summary {
    return new Summary(new WinAnalyzer(teamName), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public report: Report) {}

  buildAndReport(data: string[][] | MatchData[]) {
    const analyzerResult = this.analyzer.run(data);
    this.report.print(analyzerResult);
  }
}
