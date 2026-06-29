/*
- An array is a type of variable that stores multiple values.
- The values can be the same data type or different data types.
- Arrays are declared using [] or the generic Array<T> type.
- Indexing starts from 0.
- Arays are an ordered collection of elements

*/

//Approach 1: Using Leteral
let name1:string[] = [];  // Declaration
name1[0]="John";          // Initialization
name1[1]="Smith";
name1[2]="Peter";
name1[3]="Scott";
console.log(name1);
// (OR)

let name2:string[]=["John", "Smith", "Peter", "Scott"];  // Declaration & Initialization
console.log(name2);

//Approach 2: Using Generic Array<T> type
let empName:Array<string>=["John", "Smith", "Peter", "Scott"]
let empID:Array<number>=[101,102,103,104]
let data:Array<string | number>=["John", 101, "Smith", 102, "Peter", "Scott", 103, 104]
let mixedData:Array<any>=["john", 101, true, null]

// Size of an Array
console.log("Size of an Array", data.length)

//Iteration of an Array using for loop
for(let i=0;i<empName.length;i++)
{
    console.log(empName[i])
}

//Iteration of an Array using for...in loop
for(let i in empID)  // i represents the index
{
    console.log(empID[i])
}

//Iteration of an Array using for...of loop
for(let i of data)  // i represents the value  // similar to for-each loop
{
    console.log(i)
}

//Passing an Array to the function
function search(ele:number, arr:number[]):boolean
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===ele)
            {
                return true
            }
    }
    return false
}

let arr:number[]=[10,20,30,40,50]
console.log(search(30, arr));  // true
console.log(search(100, arr)); // false 

//A function takes an Array and returna an array
function capitalizeWords(arr:string[]):string[]
{
    let result:string[]=[];
    for(let i=0;i<arr.length;i++)
    {
       result[i]=arr[i].toUpperCase();
    }
    return result;
}

let word:string[]=["hello", "world", "TypeScript"];
console.log(capitalizeWords(word));



/*
- A tuple is a fixed-length array where each element has a specific type.
- It helps in storing multiple fields of different data types together
*/

let person:[string, number]=["john", 101]
console.log(person)
console.log(person[0])
console.log(person[1])

//Iteration of an Array using for loop
let user:[number,string, boolean, number, string]=[101, "welcome", true, 102, "john"]
for(let i=0;i<user.length;i++)
{
    console.log(user[i])
}

//Iteration of an Array using for...in loop
for(let i in user)  // i represents the index
{
    console.log(user[i])
}

//Iteration of an Array using for...of loop
for(let i of user)  // i represents the value  // similar to for-each loop
{
    console.log(i)
}

// Tuple Array
let students:[number,string][]=[[101, "john"], [102, "Smith"], [103, "Peter"]]
console.log(students.length)   // 3
console.log(students)       // [ [ 101, 'john' ], [ 102, 'Smith' ], [ 103, 'Peter' ] ]
console.log(students[1])   // [ 102, 'Smith' ]

let tp=students[1]
console.log(tp[0])
console.log(tp[1])