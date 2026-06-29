// Variable : Container which can hold/store some data

// var, let, const

//Syntax: keyword variableName:dataType(Optional)=variableValue

//Ex 1:  var age:number=30
//Ex 2:  var age=30

// var VS let VS const
//-----------------------------------------
// var - we do not use this in modern TS/JS. Avoid var because it has function scope and can lead to unexpected issues.
// let - Use let when we need a variable that can change
// const - Use const when the variable should not change

/*Aspects:
1.Scope
2.Declaration/Value Assignment
3.Re-declaration
4.Re-initialization/Re-assignment
5.Hosting
*/

//1.Scope - Accessible area (Functional scope(var) and Block Scope (let & const))

function diff(){
    let name4 = "test"
    if(true){
        var name1 = "welcome var"
        let name2 = "welcome let"
        const name3 = "welcome const"
        console.log(name1)
        console.log(name2)
        console.log(name3)
        console.log(name4)
    }
    console.log(name1)
        //console.log(name2) - cannot access
        //console.log(name3) - cannot access
}

diff()

var age=30
console.log(age)

//2.Declaration/Value Assignment
// var and let can be declared w/o initialization. 
// const cannot be declared w/o initialization
var x; let y; // declaration
console.log(x) //undefined
console.log(y)
x=10; y=20;  // initialization
console.log(x) //10
console.log(y)

//const z; //Incorrect
const z=30; // correct
console.log(z)

//3.Re-declaration
// var allows the re-declaration
// let and const not allows the re-declaration
var a = 10;
var a = 20;
console.log(a)
let country = "india"; // same for const
//let country = "US";

//4.Re-initialization/Re-assignment
// var and let - re-assignment allowed
//const - re-assignment cannot allowed (Only constants allowed - cannot change the value)

var age2 = 50;
age = 60; // allowed
console.log(age2); // same for let as well

const sch = "dbhs";
//sch = "bbhs"; // not allowed


//5.Hoisting - var (Hoisted with undefined), let and const (Not Initialized) 
var b;
console.log(b); // undefined
//var b = 60;
//console.log(b)

//console.log(animal)
let animal = "dog"
console.log(animal)