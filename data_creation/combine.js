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
  .getJsonFromCsv("./Part3.2_sorted_10k.csv");

// data = JSON.stringify(jsonData);
data = jsonData;

// fs.writeFile("./part1.1.json", data, function (err) {
//   if (err) {
//     console.log(err);
//   }
// });

// const data = require("./part1.1.json");
// const fs = require("fs");

let l = data.length;

const final = [];

for (let i = 0; i < l; ++i) {
  if (data === undefined) continue;
  //   console.log(data[i].AppName.toString());
  str1 = data[i].AppName.toString().trim();
  str2 = data[i].AppId.toString().trim();
  str3 = data[i].Category.toString().trim();

  if (str2 == "Photo Backup") {
    console.log(str1);
    console.log(str2);
    console.log(str3);
  }

  const arr = {
    AppName: str1,
    AppId: str2,
    Category: str3,
  };
  //   arr.push(data[i].AppName);
  //   arr.push(data[i].AppId);
  //   arr.push(data[i].Category);

  final.push(arr);

  console.log(i);
}

var jsonContent = JSON.stringify(final);

fs.writeFile("./final_6.json", jsonContent, "utf8", function (err) {
  if (err) {
    return console.log(err);
  }
});
