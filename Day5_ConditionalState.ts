//Condition will always returns boolean values
//Expression can return anything number,string, boolean, expression

// If condition
let age=21;
if(age>18){
console.log("Eligible for vote")
}

//if-else
if(age%2==0)
{
    console.log(age, "Even Number")
}else
{
    console.log(`${age} Odd Number`)
}

//nested-if
let marks:number=40
if(marks>=90 && marks<=100)
{
    console.log("Grade A")
}else if(marks>=75 &&marks<90)
{
console.log("Grade B")
}
else if(marks>=60 &&marks<75)
{
console.log("Grade C")
}
else
{
    console.log("Grade D")
}

//Switch
let day:number=8
switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid Day")
}