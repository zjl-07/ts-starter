import MatchReader from "./MatchReader";
import CsvReader from "./CsvReader";
import Summary from "./Summary";
import WinAnalyzer from "./analyzer/WinAnalyzer";
import ConsoleReport from "./reporter/ConsoleReport";
import HtmlReport from "./reporter/HtmlReport";

const csvReader = new CsvReader("football.csv");
const matchReader = new MatchReader(csvReader);
matchReader.load();

const summary = new Summary(
  new WinAnalyzer("Man United"),
  new ConsoleReport()
  // new HtmlReport()
);

summary.buildAndReport(matchReader.data);
