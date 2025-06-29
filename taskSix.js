// Make a program that looks inside a folder and
// copies all `.txt` files into a new folder called
// `backup`.
// *Hint: You’ll need to check file extensions
// and use `fs.copyFileSync`.*

const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "source"); // Folder containing .txt files
const backupDir = path.join(__dirname, "backup"); // Backup folder

// Function to copy .txt files to the backup folder
function backupTextFiles() {
  try {
    // Ensure the backup directory exists
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir);
    }

    // Read the source directory contents
    const files = fs.readdirSync(sourceDir);

    // Filter and copy .txt files
    files.forEach((file) => {
      const filePath = path.join(sourceDir, file);
      if (path.extname(file) === ".txt" && fs.statSync(filePath).isFile()) {
        const destPath = path.join(backupDir, file);
        fs.copyFileSync(filePath, destPath);
        console.log(`Copied ${file} to ${backupDir}`);
      }
    });
  } catch (err) {
    console.error("Error during backup:", err);
  }
}

// Call the function to backup .txt files
backupTextFiles();
