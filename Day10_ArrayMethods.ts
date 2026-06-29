let numbers:number[]=[1,2,3,4,5]
let fruits:string[]=["banana","mango","apple","grapes","orange"]

console.log("Numbers Array", numbers)  // [ 1, 2, 3, 4, 5 ]
console.log("fruits Array", fruits)  // [ 'banana', 'mango', 'apple', 'grapes', 'orange' ]

// 1.push() - Adds single/multiple elements to the end of an array
numbers.push(6)
numbers.push(7,8)
console.log("After pushing",numbers)

// 2.pop() - Removes the last element from an array
let lastNum:number|undefined=numbers.pop()
console.log("Removed ele", lastNum)  //8
console.log("After pop(remove)", numbers) 

// 3.shift() - Removes the first element from an array
let firstNum=numbers.shift()
console.log("Removed ele",firstNum)  //1
console.log("After shift(remove)", numbers) // [ 2, 3, 4, 5, 6, 7 ]

// 4.unshift() - Adds single/multiple elements from beginning of an array
fruits.unshift("kiwi")
fruits.unshift("pomo", "strawberry")
console.log("After unshift",fruits)

// 5.concat() - Combines two or more arrays
let combinedArray:number[]=numbers.concat([8,9],[10])
console.log("Combined Array", combinedArray)
let fruits2:string[]=["jack", "plum"]
let combinedfruits=fruits.concat(fruits2)
console.log(combinedfruits) // ['pomo','strawberry','kiwi','banana','mango','apple','grapes','orange','jack','plum']

// 6.slice() - Extracts a section(subset) of an array
// Starting index starts from zero
// Ending Index will be exclusive. Ex: If 3 is ending index it will consider as 2
console.log(fruits.slice(1,4)) //[ 'strawberry', 'kiwi', 'banana' ]

// 7. splice() - Adds/removes elements from an array(From everywhere)
//syntax: array.splice(starting index,deletecount,items)
let removedfruits=fruits.splice(1,3)
console.log("After removed", fruits) // [ 'pomo', 'mango', 'apple', 'grapes', 'orange' ]
console.log("Removed fruits", removedfruits) // [ 'strawberry', 'kiwi', 'banana' ]

fruits.splice(1,0,"pineapple", "kiwi")
console.log(fruits) //[ 'pomo', 'pineapple', 'kiwi', 'mango', 'apple', 'grapes', 'orange' ]

fruits.splice(1,2,"lemon","lemon mint")
console.log(fruits) //[ 'pomo', 'lemon', 'lemon mint', 'mango', 'apple', 'grapes', 'orange' ]

// 8. indexOf() - Finds the index of an element, If element not found then return -1
console.log(fruits.indexOf("mango")) //3
console.log(fruits.indexOf("papaya")) //-1
console.log(fruits.indexOf("apple",3)) //4

// 9. includes() - Checks if an element exists
// returns true/false
console.log(fruits.includes("papaya")) //false
console.log(fruits.includes("lemon")) //true

// 10. toString() - converts array to string
console.log(numbers) // [ 2, 3, 4, 5, 6, 7 ]
console.log(numbers.toString()) // 2,3,4,5,6,7


// Advanced Methods
/* 1. forEach() - Executes a function once for each array element
It takes function as a parameter

Syntax : array.forEach(function(currentValue, index, array){})

currentValue - The curent element being processed in the array
index(optional) - the index of the current element being processed in the array
array(optional) - The array the current element belongs to.
*/

//Ex-1: Get index of all the fruits along with the values
let fruit:string[]=["banana","mango","apple","grapes","orange"]

console.log("Using forEach")
fruit.forEach(function(element, index){
    console.log(index, element)
})

console.log("Using for-in")
for(let i in fruit)
{
    console.log(i, fruit[i])
}

console.log("Using Arrow")
fruit.forEach((element, index)=>{
    console.log(index, element)
})

//Ex2: Change the element in Uppercase
fruit.forEach(function(element){
    console.log(element.toUpperCase())
})

/*
2. map() - creates a new array with the result of calling the function on every element of an array
It takes function as a parameter
Returns the same number of elements that we have in original array

Syntax : array.map(function(currentValue, index, array){})
*/

//Ex1. Square of all the elements in an array
let number3:number[]=[1,2,3,4,5]
let squaredNumber:number[]=number3.map(function(element){
    return element*element
})
console.log(number3)
console.log(squaredNumber)

//Ex2. Double all the elements in an array using arrow fn
let doubledNumber:number[]=number3.map((element)=> element+element )
console.log(number3)
console.log(doubledNumber)

/*
3. filter() - Creates a new array with all the elements that pass/satisfy the function
It takes function as a parameter
Returns either same or fewer number of elements compared to original array

Syntax : array.filter(function(currentValue, index, array){})
*/

//Ex1. Get the only even numbera from an array
let evenNum:number[]=number3.filter((num)=>{
    return (num%2==0)
})
console.log(evenNum)

//Ex3. get the numbers which are greater than 3
let filteredNumber=number3.filter((num)=> num>3)
console.log(filteredNumber)

/*
4. reduce() - Applies a function on every element of an array and returns a single value
syntax: array.reduce(function(accumulator, currentValue, index, array){})
accumulator - The accumulated value from previos iteration
currentvalue - The current element being processed
*/

//Ex1. sum of all the elements in an array
let reduceResult=number3.reduce(function(total, element){
    return total+element
})      // },0) ---> defualt value of accumulator is 0 , if we want to change it than we have to mention it in here
console.log(reduceResult)

/*
5. some() - checks if any element satisfies a condition
Returns true if at least one element passed the condition

syntax: array.some(function(currentvalue, index, array){})
*/

//Ex1. Check array contains negative number ot not
let hasNegative=number3.some(function(element){
    return element<0
})
console.log(hasNegative)

//Ex2. Check array contains positive number ot not
let hasPositive=number3.some((element)=> element>0)
console.log(hasPositive)

/*
6. every() - checks if all elements satisfy a condition
Returns true if all elements pass tha condition, else false

syntax: array.some(function(currentvalue, index, array){})
*/

//Ex1.even or not
let allEven=number3.every(function(element){
    return element%2==0
})
console.log(allEven)

//Ex2. all elements should be greater than one or not
let allGreat=number3.every((element)=> element>=1)
console.log(allGreat)