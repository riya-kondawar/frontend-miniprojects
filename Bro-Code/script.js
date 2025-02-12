// BroCode Javascript course - 80 videos

/*
// console.log("Hello");

// console.log("I like Pizza");

// window.alert("This is an alert");
// window.alert("I like Pizza!");

document.getElementById("myh1").textContent="Hello guyz";
document.getElementById("myp").textContent="I like Pizza!";

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof gpa);
console.log(typeof price);
console.log(typeof gpa);

// 
let fName = "Riya";
let favFood = "Fish";
let email = "riya@gmail.com";

console.log(typeof fName);
console.log(typeof $(favFood));
console.log(typeof $(email));
console.log(typeof fName);

// boolean
let online = false;
console.log("I am online: ${online} ");


// var = A container that stores a value.
let fullName = "Riya K";
let Age = 20;
let isstudent = false;

document.getElementById("p1").textContent = "Your name is ${fullName}";
document.getElementById("p2").textContent = "You are ${age} years old";
document.getElementById("p3").textContent = "Enrolled: ${isstudent}";


// arithematic operators =>
//     operands(values, var, etc.)
//     operators (+ - * /)
//     ex. 11 = x+5

let stud= 30;
stud += 1; // augmentation
stud -= 4;
stud *= 2; // augmentation
stud /= 3;
stud **= 2; // power or a number
stud %= 3; // remainder

// stud++;
// stud--;

console.log(stud); 

// vid 4
// 1. Easy way => window prompt
let username;
username = window.prompt("What's your username?");
console.log(username);

// 2. Professional way 

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    // console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`

}


// type conversion = change the datatype of a value to another (str, num, bool)
let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log(age);


let x = "pizza"; 
let y = "pizza"; 
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// vid 5
// const = a var that cant be changes
const pi = 3.14159;
let radius;
let circumference;
radius = window.prompt("Enter the radius of a circle: ");
radius = Number(radius);
circumference = 2*pi*radius;
console.log("Your cricumference is: " + circumference);

// 
const pi = 3.14159;
let radius;
let circumference;
radius = window.prompt("Enter the radius of a circle: ");
radius = Number(radius);
document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2*pi*radius;
    document.getElementById("myH3").textContent = circumference+"cm";
}

// vid 7 - Counter function
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}



// Vid 8
// Math - built in obj that provides a collection of properties & methods


let x = 3.21;
let y = 2;
let z;
let max = Math.max(x,y,z);
let min = Math.min(x,y,z);
z = Math.round(x);
z = Math.floor(x);
z = Math.ceil(x);
z = Math.trunc(x);
z = Math.pow(x);
z = Math.sqrt(x);
z = Math.log(x);
z = Math.sin(x);
z = Math.cos(x);
z = Math.tan(x);
z = Math.abs(x);
z = Math.sign(x);

console.log(z);


// vid 9
// Random num generator
const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + 1;
console.log(randomNum);

*/

// vid 10 
// Checkbox 
let age = 45;
let hasLisence = false;

if(age >=18){
    console.log("You r old enough to drive.");
    if(hasLisence){
        console.log("You have your lisence!");
    }
    else{
        console.log("You do not have your lisence yet!");
    }
}
else if(age <= 0){
    console.log("Enter valid age");
}
else{
    console.log("You must be 18+ to drive");
}





