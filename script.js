console.log("Hello world")

// Variables (Primitive type)

let a = 23;
console.log(a);

let b = true;
console.log(b);

let c = 'Rohit';
console.log(c);

let d = 12.3;
console.log(d);

let e = 23.45678;
console.log(e);

let undefine;

let nl = null;
console.log(nl);


// const num = 23;
// let num1 = num++;

// console.log(num1);


// Reference Types

// Object - Multiple variables linked together

let person = {
    firstName: 'Rohit',
    age: 23,
};

console.log(person.age);
console.log(person['age']);

// Arrays - Data structure used to contain a list of items

let names = ['Aman', 'Rohit', 'Arjun'];
console.log(names);

// operator

// Arithmetic(+,-,*,/,%)

let aa = 6;
let bb = 2;
console.log(aa+bb);
console.log(aa-bb);
console.log(aa*bb);
console.log(aa/bb);
console.log(aa%bb);
console.log(aa**bb);

// Preincrement/Postincrement

console.log(++aa);
console.log(bb++);
console.log(bb);

// Preincrement/Postdecrement

console.log(--aa);
console.log(bb--);
console.log(bb);

// Assignment operator

let cc = 2;
c = c+2;
console.log(c);

// Comparison operator

let dd = 23;
let ee = 12;

console.log(dd>ee);
console.log(dd<ee);
console.log(dd>=ee);
console.log(dd<=ee);
console.log(dd===ee); //(strict equality) - datatype and value both needs to be equal
console.log(dd!==ee);

//Ternary Operator - It is also known as condition operator

let age = 17;
let status = (age >= 18)? 'Yes vote' : 'No vote';
console.log(status);

// Logical Operator - It allows us to compare variables or values and mostly used to 
// make decisions based on condition specified for the statements.

// And(&&) - all condition must be true
// oR - Atleast one condition must be true
// Not(!) - true become false and false become true
let x = 23;
let y = 12;
console.log(x>11 && y<13);
console.log(x == 23 || y == 6);
console.log(!x>13);

// With Non-Booleans - concept of false and truth
// falsy value - undefined, null, 0, false, NaN
// truthy value - anything not falsy

console.log(true || null);
console.log(true || 'Aman');

// Bitwise Operator - It work on bit
// Bitwise And(&)
// Bitwise Or(|)

let op = 2;
let op2 = 3;
console.log(op&op2);
console.log(op|op2);

// controls Statements
// if else

if(x>45){

    console.log("x is greater")
}
else{

    console.log("x is smaller");
}

// if-elseif-else

if(x>12){
    console.log("x is larger");
}
else if(x==23){

    console.log("x is 23");
}

else if(x>15){
    console.log("x is larger than 15")

}

else{

    console.log("xi is smaller");
}

// Switch case - It is part of javascript conditional statements which are used to perform different
// actions based on different conditions

let p =45;
let q = 34;
let large = p>q;
switch(large){

    case p<q:console.log("false");
    break;
    case p>q:console.log("true");
    break;
    default:
    case p == q:console.log("equal");
}

// Loops - Repetition of same task
// for loops

for(let i = 1; i<=5; i = i+1){
console.log("Rohit");
}

// while loop

let i = 0;

while(i<=10){

console.log("Aman");
i++;
}

// do while loop
let j = 1;
do{

    console.log("Naveen");
    j++;
}

while(j<=10);


// Object - Multiple variable linking with each other which has common real time entity
// Or It is a real time entity which has properties and function

let rectangle = {
    length: 1,
    breath: 2,

    draw: function(){

        console.log("drawing rectangle");
    }
};

console.log(rectangle);
console.log(rectangle.draw());


// Object creation - factory function and constructor funcction
// factory function helps to create object

// function createRectangle(len, bre){
//     rectangle = {
//         length:len,
//         breath:bre,
//         draw(){

//             console.log("drawing function");
//         }
//     };

//     return createRectangle;
// }

// let rectangleObj1 = createRectangle();
// let rectangleObj2 = createRectangle(23, 34);

// Constructor function - It initialize/Define the properties and methods

function Rectangle(){
    this.length = 1;
    this.breath = 2;
    this.draw = function(){

        console.log("drawing")
    }
}

let rectangleObject = new Rectangle();

// with parameter

// function Rectangle(len, bre){
//     this.length = len;
//     this.breath = bre;
//     this.draw = function(){

//         console.log("drawing")
//     }
// }

// let rectangleObject1 = new Rectangle(2, 3);


// Dynamic Nature Of Objects
function obj(){
    this.length  = 4,
    this.breath = 5,
    this.draw = function(){

        console.log("drawing");
    }
}

let Object1 = new obj();
Object1.color = 'yellow';
delete Object1.color;


// DataTypes in Js

// Primitive Type
let a1 = 10;
let b1 = a1;

a1++;

console.log(a1);
console.log(b1);

// Reference Datatype

let a11 = {value: 10};
let b11 = a11;

a11.value++;
console.log(a11.value);
console.log(b11.value);



let k = {
    value:67
};

function inc(a){
    k.value++;
}

inc(k);

console.log(k);



















