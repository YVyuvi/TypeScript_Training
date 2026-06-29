/* let rollNum:number = 40;

(Type/Data Type) /(Annotations)/ (type Inference)
number ---> data type / type
:number -----> Annotation ---> assigning data type to the variable explicitly on compile time
Type Inference---> assigning data type to the variable based on the variable value on run time 
*/

/*
1.Premitive Data Types(Built-in)
Number, String, Boolean, Null, Undefined, Any, union Type, Void

2.Non-Premitive data Types(Objects)
Array, Class, Function, Interface, Tuple, etc..
*/

//1.Number
let num:number=30;
let price=25.5
let big=1231344621
console.log("num:", num)
console.log("price:", price)
console.log("big:", big)
console.log(typeof(num), typeof price, typeof(big))

//2.String 
let firstname:string="john"
let lastname:string='kenedy'
let greeting:string=`Hello ${firstname} ${lastname}` //Backlit(``)
console.log(greeting)

//3.Boolean
let isStudent:boolean=true
let hasJob:boolean=false
console.log("isStudent", isStudent, "hasJob", hasJob)

//4.NULL & Undefined (Special types for absence of values)
let emptyvalue:null=null
let notAssigned:undefined=undefined
console.log(emptyvalue, notAssigned)
let empty:number
//console.log(empty) //undefined

//5.Any (losses typescript benefits like statically typed prog lang and type safety)
let value:any="welcome"
value=100
value=true
console.log(value)

//6.Union (Combine multiple type)
let id:string | number | boolean = "12345";
//id="12345"; 
console.log(id)
id=12345; 
console.log(id)
id=false; 
console.log(id)

//7.Void (used for functions that don't  return anything)
function show1():void //optional
{
    console.log(10+20)
}
show1()

function show2(x:number, y:number):string 
{
//return (x+y)
return "hello";
}
let res = show2(10,20);
//show2(10,20)
console.log(res)
console.log(show2(20,30))

