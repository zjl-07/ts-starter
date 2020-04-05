import MatchReader from "./MatchReader";
import Summary from "./Summary";

const matchReader = MatchReader.matchReaderWithCsv("football.csv");

const summaryUsingConsole = Summary.generateReportWithConsole("Man United");
const summaryUsingHtml = Summary.generateReportWithHtml("Man United");

matchReader.load();

summaryUsingConsole.buildAndReport(matchReader.data);
summaryUsingHtml.buildAndReport(matchReader.data);
