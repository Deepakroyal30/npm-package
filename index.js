const fs = require('fs');


const data = 'Hello, this is some text to be written to the file!';

const filePath = 'example.txt';


fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.error('Error creating the file:', err);
    return;
  }
  console.log(`File "${filePath}" has been created successfully!`);
});


fs.unlink(filePath, (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
    return;
  }
  console.log(`File "${filePath}" has been deleted successfully!`);
});
