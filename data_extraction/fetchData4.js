var gplay = require("google-play-scraper");
const fs = require("fs");
const start = Date.now();

const list = require("./id1.json");
const final = require("./final_4.json");

const data = [];
const init = 50000;

async function main() {
  for (f in final) {
    // if (f == 50) break;
    console.log(f);

    if (f <= init) continue;

    x = final[f];
    const y = await gplay.datasafety({ appId: final[f].AppId });

    let merged = { ...x, ...y };
    data.push(merged);

    //time
    const end = Date.now();
    // console.log(f);
    var number = (end - start) / 60000;
    number = Math.trunc(number * 100) / 100;
    var number2 = (end - start) / (f - init + 1);
    number2 = Math.trunc(number2 * 100) / 100;
    console.log(`Execution time: ${number} min `);
    console.log(`Execution time per app: ${number2} msec `);

    if (f % 1000 == 0) {
      // console.log(data);
      fs.writeFileSync(
        `./data4.json`,
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
}

main();
