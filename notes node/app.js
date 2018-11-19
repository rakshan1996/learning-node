console.log("starting app");
const fs=require('fs');
fs.appendFile('readme.txt','This file was created using require and fs');

// first method 
fs.appendFile('readme.txt','This data has been appended by adding the callback function to handle the error',function(err){
console.log('unable to append into file');});

//Second Method 
fs.appendFileSync('readme.txt','this data is appended using the Sync append file method to avoid the async warning');