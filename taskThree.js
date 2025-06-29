// Given a file with a paragraph of text,
// count how many times the word **"Node"**
// appears and write the count into another file.
// *Hint: You can break the paragraph into words
// and loop through them.*

const fs = require("fs");

// Read the content of the file
const content = fs.readFileSync("paragraph.txt", "utf8");

// Split the content into words
const words = content.split(/\s+/);

// Count occurrences of the word "Node"
let count = 0;
words.forEach((word) => {
  if (word.toLowerCase() === "node") {
    count++;
  }
});

// Write the count to another file
fs.writeFileSync("nodeCount.txt", `The word "Node" appears ${count} times.`);
console.log(`The word "Node" appears ${count} times.`);
