/*
1. Class
2. Read only Properties
3. Optional Properties

4. Static variables and methods
 --Static properties/methods are common/shared across all the objects
 --Static properties/methods can be accessed through class name directly
 --Static properties/methods can be modified using any objects
 --We cannot use this for static properties, instead we can use class name
*/

class Student 
{
    readonly studentID:number; // Read-only property (can only be assigned once, inside constructor)
    name:string; // Regular property
    email?:string; // Optional property (can be undefined)
    static schoolName:string="ABC Hign School"; // Static variable shared among all instances/objects

    constructor(sid:number, sname:string, semail?:string)
    {
        this.studentID=sid;
        this.name=sname;
        this.email=semail;
    }

    displayInfo():void
    {
        console.log("Student ID:", this.studentID)
        console.log("Student Name:", this.name)
        if(this.email)
        {
            console.log("Student email:", this.email)
        }
        else
        {
            console.log("There is no Email")
        }
        console.log("School Name:", Student.schoolName)
    }

    static changeSchoolName(newName:string):void{
        Student.schoolName=newName;
    }

}

 let s1 = new Student(101, "John");
 let s2 = new Student(102, "Smith", "Smith@gmail.com");

 s1.displayInfo();
 s2.displayInfo();

 //Try to modify student id by using s1
 //s1.studentID=123; // Cannot assign to studentid because it is a read-only property

Student.changeSchoolName("XYZ High School");

 s1.displayInfo();
 s2.displayInfo();