
// var data = require('./script2')

// var a = 4;
// var b = 234;
// var c = 42;

// console.log(data);
// console.log("I am Riya");
// console.log("Nice to meet u!!!")

// // install package one-liner-jokes
// // usage -> read guidelines
// // One liner joke package -> bas 2 line ka hi code hai
// var oneLinerJoke = require('one-liner-joke');
// console.log(oneLinerJoke.getRandomJoke());


// // figlet text package
// var figlet = require("figlet");

// figlet("Oh miye gowddd!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// express package installed
const express = require('express')
const app = express()

// middleware fnc
app.use(function(req,res,next){
    console.log("Hey from middleware");
    next();
});

app.get('/', function (req, res) {
  res.send('Heya!')
})
app.get('/like', function (req, res) {
    res.send('Riya has liked this post!!!')
  })

app.listen(3000)

