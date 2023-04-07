 fs.writeFileSync(
    `./data1.json`,
    JSON.stringify(data),
    "utf8",
    function (err) {
      if (err) {
        return console.log(err);
      }
    }
  );