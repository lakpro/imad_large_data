const csvToJSON = require("csv-file-to-json");
var fs = require("fs");
const jsonData = csvToJSON({ filePath: "./addresses.csv" });
fs.writeFile("part1.json", jsonData, function (err) {
  if (err) {
    console.log(err);
  }
});
