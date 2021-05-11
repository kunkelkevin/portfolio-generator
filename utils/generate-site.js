const fs = require("fs");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve({
          ok: true,
          message:
            "Portfolio complete! check out index.html to see the output!",
        });
      }
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve("Your stylesheet has been created");
      }
    });
  });
};

module.exports = { writeFile, copyFile };
