// SHERIYANS
// 2nd week of sept



// var old JS mei tha
// var is functn scoped -> var apne parent function mei kahi bhi use ho sakta hai
// var adds itself to the window obj

// let const new JS mei hai
// let const braces scoped hota hai
// let const doesnt add

function abcd(){
    for(var i = 1; i<12; ){
        console.log(i);
    }
    console.log(i);
}

// stack -> 
// heap -> jitne bhi variables ya data hum banate hai unhe store kahi to karna padta hai, uske liye heap memory concept use hota hai

// execution context -> matlab hum jab bhi function run karenge, funct khudka ek imaginary container bana lega jisme uski 3 cheeze hogi: 1) variables 2) functions inside that parent funct 3) lexical environment of that funct
//      It is a container whr the functn's code is executed & its created whenever a function is called, it contains 3 things: 
// lexical environment -> Ek chart jisme ye likha hota hai ki apka particular funct ki chezo ko access kr sakta hai & kinko nahi
//      It holds its scope & scope chain

// how to copy reference values? Use spread operator
var a = [1,2,3,4,5,6,7,8,9];
var b = [...a]; // all contents of 'a' r copied in 'b'
b.pop();

// js mei kuch bhi likho wo mainly do prakar mei se kisi ek ko belong karta hai
// falsy values -> 0 falseundefined null NaN document.all
// truthy values -> 

if(-1){
    console.log("hey");
}
else{
    console.log("bye bye");
}


// switch case
switch(1){
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
}


// foreach loop sirf array pe chalta hai: array mei changes nahi karta, ek new temporary array banta hai
var arr1 = [1,2,3,4,646,,35,7,5,87,657,342,778];
a.forEach(function(val){
    console.log(val + 2);
})


// forin objects pr loop karne ke liye hota hai forin loop
var object1 = {
    name: "Riya",
    age: 20,
    city: "Pune"
}
for(var key in object1){
    console.log(key, object1[key]);
}


// dowhile loop : ek bar value print karni hai & uske baad condition check karni ho toh use karte hai
var hippo = 8;
do{
    console.log("Hippo says Hi");
    hippo++;
}
while(hippo < 12);


// CALLBACK functions -> jab bhi koi aisa code jo baad mei chalta hai aap likhoge, kyuki vo code baad mei chalta hai JS ko ye pata nahi hota ki vo complete hua ya nahi, aise code ke completion pr JS ko bataya jata hai ki vo complete hogaya aur aap usse chala sakte ho, ye batane ka kam callback ka hai.
setTimeout(function(){
    console.log("2 second ke baad chalana ye code");
}, 2000); // 1000 matlab 1sec


// first class fncs -> JS mei ek concept hai jiska matlab hota hai ki aap fnc ko use kr sakte ko as a value.
// we can treat functions as a normal value
function pitaji(baap){
    baap();
}
pitaji(function(){
    console.log("hiiiiiiiiiiiiieeeeeeeeeeeee");
});


// Array[] is actually an object
Array.isArray([]); // true
Array.isArray({}); // false


// we can get -ve indexes arrays in JS, matlab
anArray = [3,6,2,5,0,4,6];
anArray[-1] = 9;
console.log(anArray); //check the output, tum samajh jaoge


// how to delete object prop
var newObject = {
    name: "Mayuri",
    age: 20,
    college: "DY Patil"
}
console.log(newObject);

delete newObject.age;
console.log(newObject);

delete newObject.name;
delete newObject.college;
console.log(newObject);



