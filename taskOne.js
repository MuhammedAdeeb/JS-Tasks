// 1. Write your name into a file called `name.txt`
// 2. Read `name.txt` and print the content
// 3. Append your age to the file
// 4. Delete the file
// 5. Make a folder called `users`, then write `hello.txt` inside it
// 6. List all files inside `users` folder

const fs = require("fs");

// Create a file named "name.txt" and write "Adeeb" to it
fs.writeFileSync("name.txt", "Adeeb");
console.log("File written successfully!");

// Read the content of "name.txt"
const data = fs.readFileSync("name.txt", "utf8");
console.log("Content of 'name.txt':", data);

// Append "19" to "name.txt"
fs.appendFileSync("name.txt", "\n19");
console.log("File updated successfully!");

// Delete the file "name.txt"
fs.unlinkSync("name.txt");
console.log("File deleted successfully!");

// Create a folder named "users"
fs.mkdirSync("users");
console.log("Folder created successfully!");

// Create a file named "hello.txt"
fs.writeFileSync("users/hello.txt", "Hello");
console.log("File written sucessfully!");

// List all files in the "users" folder
const files = fs.readdirSync("users");
console.log("Files in 'users' folder:", files);
