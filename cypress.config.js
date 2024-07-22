const { defineConfig } = require("cypress");
const xlsx = require("node-xlsx");
const fs = require("fs");
const writexlsx = require("xlsx");
const path = require("path");
const csv = require("fast-csv");
const { writeToPath } = require("fast-csv");
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    screenshotOnRunFailure: true,
  },
  e2e: {
    baseUrl:
      "https://naveenautomationlabs.com/opencart/index.php?route=account",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
      on("task", {
        readFromCSV({ filePath }) {
          return new Promise((resolve) => {
            let dataArray = [];
            csv
              .parseFile(filePath, { headers: true })
              .on("data", (data) => {
                dataArray.push(data);
              })
              .on("end", () => {
                resolve(dataArray);
              });
          });
        },
      });
      on("task", {
        writeToCSV({ filePath, name, rows }) {
          writeToPath(`${filePath}/${name}`, rows, { headers: true });
          return null;
        },
      });
      on("task", {
        writeToExcel({ data, filePath }) {
          // Convert data to worksheet
          const worksheet = writexlsx.utils.json_to_sheet(data);
          // Create a new workbook
          const workbook = writexlsx.utils.book_new();
          writexlsx.utils.book_append_sheet(workbook, worksheet, "Users");
          // Write workbook to file
          writexlsx.writeFile(workbook, filePath);
          return null;
        },
      });
    },
  },
});
