let number1:number=20, number2:number=10;

//Arithmetic Operators
console.log("*********Arithmetic Operator*************")
console.log(number1+number2), console.log(number1-number2), console.log(number1*number2), 
console.log(number1/number2),console.log(number1%number2), console.log(5**2)

//Assignment Operator
number1=10, number2=5
console.log("*********Assignment Operator*************")
console.log(number1+=number2) // number1 = number1 + number2
console.log(number1-=number2) // number1 = number1 - number2
console.log(number1*=number2) // number1 = number1 * number2
console.log(number1/=number2) // number1 = number1 / number2
console.log(number1%=number2) // number1 = number1 % number2

//Relational Operator
//Returns Boolean values(true/false )
// < > <= >= == != ===(Strict Equality)
number1=10, number2=20
console.log("*********Relational Operator*************")
console.log(number1<number2), console.log(number1>number2), console.log(number1<=number2), 
console.log(number1>=number2), console.log(number1==number2), console.log(number1!=number2)

let num1:any=10
let num2:any="10"
console.log(num1==num2) // true (compares only values)
console.log(num1===num2) // false (compares values and type)


/* Logical operators && || !
returns (true/false) boolean
works between boolean values
-----------------------------------------
b1       b2         &&        ||      !b1
true    true      true        true    false
true    false     false       true
false   true      false       true    true
false   false     false       false */

console.log("*********Logical Operator*************")
let b1 = true
let b2:boolean = false

console.log(b1&&b2)
console.log(b1||b2)
console.log(!b1)
console.log(!b2)
console.log(20>10 && 10>5)
console.log(20>10 || 10<5)

console.log("*********Increemenr/Decrement Operator*************")
// post inc/dec ---> first assign the value and then inc/dec the value
//pre inc/dec ---> first inc/dec the value and then assign the value
let s1:number=10;
let res1:number=s1++
console.log(res1)
console.log(res1)
console.log(s1)
let s2:number=10;
let res2:number=++s2
console.log(res2)
console.log(s2)
let s3:number=10;
let res3:number=s3--
console.log(res3)
console.log(s3)
let s4:number=10;
let res4:number=--s4
console.log(res4)


console.log("*********Ternary/Conditional Operator*************")
// exp ? res1 : res2 ;
let personAge=5;
let result:string= (personAge>10) ? "Adult" : "Minor"
console.log(result)