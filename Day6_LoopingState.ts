//While loop : a while loop executes as long as the condition is true

console.log("*********While Loop*************")
let wl:number=1   // initialization
while(wl<=10)    // consition
{
if(wl%2!=0)
{
    console.log(wl)
}
wl++   // increment
}

//do-while : A do-while loop always executes at least once before checking the condition
console.log("*********Do-while Loop*************")
let dw:number=1
do
{
    console.log(dw)
    dw++
}while(dw<=5)

//for loop : a for loop is typically used when the number of iterations is known beforehand
console.log("*********For Loop*************")
  for(let i=1;i<=10;i++)
  {
    if(i%2==0)
    {
        console.log(i)
    }
  }