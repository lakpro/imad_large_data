const data = require("./part1.1.json");
const fs = require("fs");

let l = data.length;

const final = [];

for (let i = 0; i < 1000; ++i) {
  str1 = data[i].AppName.trim();
  str2 = data[i].AppId.trim();
  str3 = data[i].Category.trim();

  if (str2 == "Photo Backup") {
    console.log(str1);
    console.log(str2);
    console.log(str3);
  }

  const arr = {
    AppName: data[i].AppName.trim(),
    AppId: data[i].AppId.trim(),
    Category: data[i].Category.trim(),
  };
  //   arr.push(data[i].AppName);
  //   arr.push(data[i].AppId);
  //   arr.push(data[i].Category);

  final.push(arr);

  console.log(i);
}

var jsonContent = JSON.stringify(final);

fs.writeFile("./final1.json", jsonContent, "utf8", function (err) {
  if (err) {
    return console.log(err);
  }
});
