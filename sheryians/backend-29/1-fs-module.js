// how to use fs module in Nodejs

const fs = require('fs'); // important

// write file
fs.writeFile("newFile.txt", "Heyyy I'm on my way to become a Web Developer", function(err){
    if(err) console.error(err);
    else console.log("Successful");

}) // Callback is a funct 

// append file
fs.appendFile("newFile.txt", "Harsh bhaiyya bahout badhiya padhate hai", function(err){
    if(err) console.error(err);
    else console.log("done append in 'newFile.txt'");
})

// rename file 
fs.rename("newFile.txt", "hello-demo.txt", function(err){
    if(err) console.error(err);
    else console.log("File rename done.");
})

// copy file
fs.copyFile("hello-demo.txt", "./backend-29/beti.txt", function(err){
    if(err) console.error(err);
    else console.log("Copied file elements");
})

// unlink file
fs.unlink("hello-demo.txt", function(err){
    if(err) console.error(err);
    else console.log("Unlinked file(removed)")
})

// remove directory
fs.rm("./copy", {recursive: true}, function(err){
    if(err) console.error(err);
    else console.log("Removed directory");
})








