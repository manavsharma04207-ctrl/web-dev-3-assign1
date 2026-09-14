const fs = require("fs");
const path = "./test.txt";

console.log("Creating File...");
fs.writeFile(path, "Hello Node.js", (err) => {
  if (err) return console.error("Error creating file:", err.message);
  console.log("File Created");

  console.log("\nReading File...");
  fs.readFile(path, "utf8", (err, data) => {
    if (err) return console.error("Error reading file:", err.message);
    console.log(data);

    console.log("\nUpdating File...");
    fs.appendFile(path, "\nLearning FS Module", (err) => {
      if (err) return console.error("Error updating file:", err.message);
      console.log("File Updated");

      fs.readFile(path, "utf8", (err, updatedData) => {
        if (err) return console.error("Error reading updated file:", err.message);
        console.log(updatedData);

        console.log("\nDeleting File...");
        fs.unlink(path, (err) => {
          if (err) return console.error("Error deleting file:", err.message);
          console.log("File Deleted");
        });
      });
    });
  });
});