import { Report } from "../Summary";

export default class ConsoleReport implements Report {
  print(statement: string): void {
    console.log(statement);
  }
}
