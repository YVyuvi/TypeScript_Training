/* string - Text value or a combination of characters
1. single quote - string literal ('Hello')
2. double quote - tring literal ("Hello")
3. backtick(``) - string template - `when we try to use a string variable inside another string value ${variable}`

index starts from 0

'' or "" or ``

Strings are immutable – once created, they can’t be changed. Methods return new strings:
let original = "Hello";
let modified = original.concat(", World!");
original is still "Hello"

*/

// Declaration
let str1 = "Hello"
let str2 = 'Hello Type Script'
let str3 = `  Hello Type Script  `
console.log(str1), console.log(str2), console.log(str3)

// when to use bachtick
let num:number=10
console.log(`Number is : ${num}`) //Number is : 10

//Length
console.log("length is ", str1.length) //length is  5

//toUppercase() and toLowercase()
console.log("Upper:", str1.toUpperCase()) //HELLO
console.log("Upper:", str1.toLowerCase()) //HELLO

//charAt(index) and indexOf(string)
console.log(str1.charAt(0)) //H
console.log(str2.indexOf("Script")) //11
console.log(str1.indexOf("e")) //1

//substring()
console.log(str2.substring(6,12)) //Type S

//includes() - returns true or false
// string value is case sensitive
console.log(str1.includes("abc")) //false
console.log(str1.includes("ll")) //true

//startsWith() and endsWith() - returns boolean value(true/false)
console.log(str1.startsWith("e")) //false
console.log(str1.endsWith("o"))  //true

//replace()
console.log(str2.replace("Type Script", "World")) //Hello World

//split() - break the string into multiple parts based on the delimeter, returns an array
let str4:string[]=str2.split(" ")
console.log(str4) //[ 'Hello', 'Type', 'Script' ]

//trim(), trimStart(), trimEnd()
console.log(str3.trim()) //Hello Type Script
console.log(str3.trimStart()) //Hello Type Script
console.log(str3.trimEnd()) //  Hello Type Script

//concat()
console.log(str1.concat(str2)) //HelloHello Type Script
console.log(str1+str2) //HelloHello Type Script Not recomended
console.log(str1.concat(str2).concat(str3)) //HelloHello Type Script  Hello Type Script

//multiline string
let multiLine:string = `Hello
                        Type
                        Script` // if we put it in "" or '' that's invalid



