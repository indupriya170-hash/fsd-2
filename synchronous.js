const fs = require('fs');

fs.writeFileSync('app.txt', 'Welcome to Node.js');

const content = fs.readFileSync('app.txt', 'utf8');

console.log("File Content: ", content);