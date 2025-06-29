// Read a file that contains a list of names (one per line)
// and create a new file where the names are written in reverse order.
// *Hint: Think about how to read the file,
// split by lines, and write in reverse.*

const fs = require("fs");

// Read the names from the file
const names = fs.readFileSync("name.txt", "utf8").split("\n");
console.log("Names read from 'name.txt':", names);

// Reverse the names
const reversedNames = names.reverse();
// Write the reversed names to a new file
fs.writeFileSync("reversed_names.txt", reversedNames.join("\n"));
console.log("Reversed names written to 'reversed_names.txt' successfully!");
