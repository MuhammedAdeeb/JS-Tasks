// Write a program that lists all files inside a
// folder called `projects`, and writes all the
// file names into `project-list.txt`.
// *Hint: Use `fs.readdirSync` and write the names
// using a loop.*

const fs = require("fs");
const path = require("path");
const projectsDir = path.join(__dirname, "projects");
const outputFile = path.join(__dirname, "project-list.txt");

// Function to list all files in the projects directory
function listProjectFiles() {
  try {
    // Read the directory contents
    const files = fs.readdirSync(projectsDir);

    // Filter out only files (not directories)
    const projectFiles = files.filter((file) =>
      fs.statSync(path.join(projectsDir, file)).isFile()
    );

    // Write the file names to project-list.txt
    fs.writeFileSync(outputFile, projectFiles.join("\n"), "utf8");

    console.log(`Project file names have been written to ${outputFile}`);
  } catch (err) {
    console.error("Error reading directory or writing to file:", err);
  }
}

// Call the function to list project files
listProjectFiles();
