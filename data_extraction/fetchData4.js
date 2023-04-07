var gplay = require("google-play-scraper");
const fs = require("fs");
const start = Date.now();

const list = require("./id1.json");
const final = require("./final_1.4.json");

const data = [];

async function main() {
  for (f in final) {
    // if (f == 50) break;
    x = final[f];
    const y = await gplay.datasafety({ appId: final[f].AppId });

    let merged = { ...x, ...y };
    data.push(merged);

    //time
    const end = Date.now();
    console.log(f);
    var number = (end - start) / 60000;
    number = Math.trunc(number * 100) / 100;
    var number2 = (number / f + 1) * 60;
    number2 = Math.trunc(number2 * 100) / 100;
    console.log(`Execution time: ${number} min `);
    console.log(`Execution time per app: ${number2} sec `);

    // console.log(data);
    fs.writeFileSync(
      `./data1.4.json`,
      JSON.stringify(data),
      "utf8",
      function (err) {
        if (err) {
          return console.log(err);
        }
      }
    );
  }
}

main();
