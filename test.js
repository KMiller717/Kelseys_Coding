var name = "Bruce";
if (name != "Bruce") {    
    console.log("What's your name?");
} else {    
    console.log("Hello, Bruce!");
}
var num1 = 10;
if(num1 == 20){
    console.log("Num is 20");
}
else{
    console.log("Adding 5");
    num1 = num1 + 5;
}
if(num1 == 15){
    console.log("Adding another 5")
    num1 = num1 + 5;
} 
else if(num1 == 20) {
    console.log("Now it is 20");
}

var num2 = 10;
if(num2 % 2 == 0){
    console.log("Divisible by 2");
    num2 = num2 * 3;
}
if(num2 % 3 == 0){
    console.log("Divisible by 3");
    num2 = num2 / 2;   
}
else if(num2 % 5 == 0){
    console.log("Divisible by 5");
    num2 = num2 * 7;
}
if(num2 % 7 == 0){
    console.log("Divisible by 7");
    num2 = num2 - 10;
}
else{
    console.log("Almost there!")
    num2 = num2 / 2;
}
console.log(num2);

//prediction: 
//num1: 11
//num2: 6


//Write your own code

var name= "Bob";
var isRaining = true;
var hasPet = false;
var job = "Web Developer";
var cash = 100;

if (isRaining) {
    console.log("I need a coat");
    cash = cash - 50;
    console.log(cash);
    isRaining = false;
    console.log(isRaining);
}

if (name != "Bob") {
    console.log("Hello stranger");
}
else {
    console.log("Hello Bob");
}

if (job = "Web Developer") {
    console.log("Keep up the good work");
    cash = cash + 500;
    job = "Senior Web Developer";
}

if (hasPet) {
    hasPet = true;
    console.log(hasPet);
}

if (cash > 1000) {
    console.log("Vacation time");
    cash = cash - 1200;
}

console.log("Payday!")

console.log(name);
console.log(isRaining);
console.log(hasPet);
console.log(job);
console.log(cash);


console.log("hello");