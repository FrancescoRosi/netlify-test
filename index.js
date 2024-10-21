const fs = require('fs');
const path = require('path');

// Read the environment variable
const atprotoContent = "test";

if (!atprotoContent) {
  console.error('ATPROTO_CONTENT environment variable is not set!');
  process.exit(1);
}

// Define the path to the .well-known directory
const dirPath = path.join(__dirname, 'public', '.well-known');
const filePath = path.join(dirPath, 'atproto');

// Create the .well-known directory if it doesn't exist
fs.mkdirSync(dirPath, { recursive: true });

// Write the content to the atproto file
fs.writeFileSync(filePath, atprotoContent);

console.log(`.well-known/atproto file created with content: ${atprotoContent}`);
