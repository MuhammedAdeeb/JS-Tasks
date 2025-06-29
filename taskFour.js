// Create a program that asks the user for a note
// from the terminal and appends
// it to a file named with today's date. If the file
// doesn’t exist, create it.
// *Hint: Use `readline`, and think about how to
// generate today’s date as a file name.*

const fs = require("fs");
const readline = require("readline");

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to get today's date in YYYY-MM-DD format
function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}.txt`; // File name format
}

// Ask the user for a note
rl.question("Please enter your note: ", (note) => {
  const fileName = getTodayDate();

  // Append the note to the file
  fs.appendFile(fileName, `${note}\n`, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log(`Note saved to ${fileName}`);
    }
    rl.close();
  });
});
