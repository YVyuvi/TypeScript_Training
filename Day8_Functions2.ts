// A Callback function is a function that passed as an argument to another function and gets executed later.

console.log("***********Callback Function**********")
//Ex 1
function greets(name:string, callback:(message:string)=>void) // fn that takes callback fn as an parameter
{
    console.log(name)
    callback("John")  // execute the callback fn
}



function showMessage(message:string) // callback fn
{
    console.log(message)
}

greets("Hello", showMessage) // calling the fn by passing the callback fn as an argument


//Ex 2
function sum(a:number, b:number, callback:(result:number)=>void)
{
    let result = a+b;
    callback(result)
}

function displayResult(result:number):void
{
    console.log(result)
}

sum(10,20,displayResult)

/*
Function Overloading
Stpe 1: write a signature of functions
Step 2: implement a fn
Step 3: calling fn
*/
console.log("***********Function Overloading**********")
//Different data types(same return type)
function getInfo(id:number):string;
function getInfo(name:string):string;

function getInfo(xyz : number | string):string
{
    if(typeof(xyz)=="number")
    {
        return (`User ID is ${xyz}`)
    } else
    {
         return (`User Name is ${xyz}`)
    }
}
console.log("***********Different params**********")
console.log(getInfo(10))
console.log(getInfo("John"))

//Different number of parameters
function add2(a:number, b:number):number;
function add2(a:number, b:number, c:number):number;

function add2(a:number, b:number, c?:number):number
{
    if(c != undefined)
    {
        return a+b+c
    }
        return a+b
}
console.log("***********Different no of params**********")
console.log(add2(10,20))
console.log(add2(10,20,30))

// Different return types
function processInput(name:string):string;
function processInput(age:number):number;

function processInput(input : string | number): string | number
{
    if(typeof(input)=="string")
    {
        return input.toUpperCase()
    }else
    {
        return input*2
    }
}
console.log("***********Different return types**********")
console.log(processInput("welcome"))
console.log(processInput(10))