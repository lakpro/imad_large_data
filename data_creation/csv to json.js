let csvToJson = require("convert-csv-to-json");
var fs = require("fs");

// let fileInputName = "myInputFile.csv";
// let fileOutputName = "myOutputFile.json";

// csvToJson
//   .parseSubArray("*", ",")
//   .generateJsonFileFromCsv("./addresses.csv", "./part1.json");
jsonData = csvToJson
  .parseSubArray("*", ",")
  .fieldDelimiter(",")
  .formatValueByType()
  .getJsonFromCsv("./Part1.1_sorted_10k.csv");

data = JSON.stringify(jsonData);

fs.writeFile("./part1.1.json", data, function (err) {
  if (err) {
    console.log(err);
  }
});
