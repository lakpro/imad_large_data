const fs = require("fs");
const list1 = require("./final_1.json");
const list2 = require("./final_2.json");
const list3 = require("./final_3.json");
const list4 = require("./final_4.json");
const list5 = require("./final_5.json");
const list6 = require("./final_6.json");

for (let j = 1; j <= 6; ++j) {
  if (j == 1) list = list1;
  else if (j == 2) list = list2;
  else if (j == 3) list = list3;
  else if (j == 4) list = list4;
  else if (j == 5) list = list5;
  else if (j == 6) list = list6;

  const id = [];

  let i = 0;
  for (l in list) {
    console.log(i);
    i++;

    id.push(list[l].AppId);
  }
  var jsonContent = JSON.stringify(id);
  fs.writeFileSync(`./id${j}.json`, jsonContent, "utf8", function (err) {
    if (err) {
      return console.log(err);
    }
  });
}
