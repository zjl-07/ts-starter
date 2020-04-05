import fs from "fs";
import { Report } from "../Summary";

export default class HtmlReport implements Report {
  print(statement: string): void {
    const htmlContainer = `
        <div>
            <h1>Analysis Report</h1>
            <p>${statement}</p>
        </div>
    `;

    fs.writeFileSync("report.html", htmlContainer);
  }
}
