/*
Named Function: A function is declared with a name

Syntax:
function functionName(parameter): returnType
{
// block of code
}

functionName(); // calling/invoking the function
*/
console.log("*********Named Function*************")
//fn with no parameters and no return type
console.log("*********w/o parameter & return type*************")
function display():void
{
    console.log("welcome")
}
display();

//fn with parameter and return type
 console.log("*********with parameter & return type*************")
function addNumber(x:number, y:number):number
{
    return x+y
}
let resu:number = addNumber(10,15)
console.log(resu)
//or
console.log(addNumber(15,20));

//fn with Rest parameters -same types
// Rest parameters dont restrict the number of values that you can pass to a fn
console.log("*********Rest parameter with same type*************")
function addNumbers(...nums:number[])
{
    let sum:number=0
    for(let i=0;i<nums.length;i++)
    {
        sum = sum+nums[i]
    }
    console.log(sum)
}
addNumbers(10,20,30)
addNumbers(10,20,30,40)
addNumbers(10,20,30,40,50)

//fn with Rest parameters -multiple types
console.log("*********Rest parameter with diff type*************")
function findElements(...elements:(number | string)[]) : number
{
    return elements.length
}
console.log(findElements(10, "john", 20, "abc", 30))
console.log(findElements(10, 20, 30,40,50,60,70))
console.log(findElements("xyz","john","abc"))

//fn with Optional(?) parameters
console.log("*********Optional Parameter*************")
function displayDetails(id:number, name:string, maildID?:string)
{
    console.log(id, name, maildID)
}
displayDetails(10, "abc", "abc@gmail.com")
displayDetails(10, "abc")

//fn with default parameter
console.log("*********Default Parameter*************")
function calDiscount(price:number, rate:number=0.50)
{
    console.log(price*rate)
}
calDiscount(1000)
calDiscount(1000, 0.30)

/*
2. Anonymous Function (Unnamed fn / Nameless function)
An anonymous fn is a fn that does not have a name.
Insted, it is assigned to a variable, which acts as its name.

W/o parameters, with parameters, rest parameters, default parameter and optional parameter is possible in anonymous fn. 

Syntax:
let variable = function(parameter)
{
  // function body
}
variable(); // calling the fn
*/

console.log("*********Anonymous Function*************")
//fn w/o parameters
console.log("*********w/o parameter & return type*************")
let msg = function():string
{
    return "Hello"
}
console.log(msg())

//fn with parameters
 console.log("*********with parameter & return type*************")
let multiply=function(a:number, b:number):number
{
    return a*b
}
console.log(multiply(10,15))

/*
3.Arrow Function/ Lamda Function
Lamda refers to anonymous function in programming.
Lamda functions are a concise mechanism to represent anonymous functions.
these functions are also called as Arrow functions.

There are 3 parts to a Lamda function.
1.Parameters - A function may optionally have parameters
2.The fat arrow notation/lamda notation (=>) - It is also called as the "goes to operator"
3.Statements - represent the functions instruction set

syntax:
let variable = (parameter) =>
{
  // block of code
}
variable();
*/
console.log("*********Arrow Function*************")
// with no parameters and no return type 
console.log("*********w/o parameter & return type*************")
let greet=():void =>
{
    console.log("Welcome")
}
greet();

//with parameter and return type
 console.log("*********with parameter & return type*************")
let add = (a:number, b:number):number =>
{
    return a+b
}
console.log(add(10, 20))

//fn with implicit return
let add1 = (a:number, b:number):number => a+b;
let multi = (a:number, b:number):number => a*b;
console.log(add1(10,20))
console.log(multi(10, 20))

//fn with Rest parameters -same types
// Rest parameters dont restrict the number of values that you can pass to a fn
console.log("*********Rest parameter with same type*************")
let addNumber1=(...nums:number[]):void =>
{
    let sum:number=0
    for(let i=0;i<nums.length;i++)
    {
        sum = sum+nums[i]
    }
    console.log(sum)
}
addNumber1(10,20,30)
addNumber1(10,20,30,40)
addNumber1(10,20,30,40,50)

//fn with Rest parameters -multiple types
console.log("*********Rest parameter with diff type*************")
let findElement1 = (...elements:(number | string)[]) : number =>
{
    return elements.length
}
console.log(findElement1(10, "john", 20, "abc", 30))
console.log(findElement1(10, 20, 30,40,50,60,70))
console.log(findElement1("xyz","john","abc"))

//fn with Optional(?) parameters
console.log("*********Optional Parameter*************")
let disdisplayDetails=(id:number, name:string, maildID?:string):void =>
{
    console.log(id, name, maildID)
}
displayDetails(10, "abc", "abc@gmail.com")
displayDetails(10, "abc")

//fn with default parameter
console.log("*********Default Parameter*************")
let calDiscounts = (price:number, rate:number=0.50):void =>
{
    console.log(price*rate)
}
calDiscounts(1000)
calDiscounts(1000, 0.30)


