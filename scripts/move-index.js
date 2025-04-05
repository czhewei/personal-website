const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "../out/index.html");
const destination = path.join(__dirname, "../index.html");

fs.rename(source, destination, (err) => {
  if (err) {
    console.error("Failed to move index.html:", err);
    process.exit(1);
  } else {
    console.log("index.html moved to the root successfully.");
  }
});
