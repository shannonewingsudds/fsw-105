function Employees(){
    //use the "this" keyword to reference each object
    //that is created from this constructor
    this.name = "Karen Millen";
    this.jobTitle = "Director";
    this.salary = "$125,000";
}
Employees.prototype.status = function (){
    console.log("Full Time");
};
console.log(Employees.prototype);
console.log(proto.constructor);
//We "instantiate" (create a new object from) our constructor with
//the "new" keyword and pass in the parameters

const Employees1 = new Employees("Kate Spade " , "President ", "$200,000 ");
const Employees2 = new Employees("Louis Vuitton " , "Vice President ", "$150,000 ");
const Employees3 = new Employees("Jimmy Choo " , "Chief Finance Offer ", "$100,000 ");

Employees.prototype.printEmployeeForm = function(){
    console.log("Name: ", + Employees.name + " Job Title: " + Employees.jobTitle + "Salary: ",  + Employees.salary);
}

printEmployeeForm(Employees1);
printEmployeeForm(Employees2);
printEmployeeForm(Employees3);

//Employees1.printEmployeeForm();
//Employees2.printEmployeeForm();
//Employees3.printEmployeeForm();



/*You are to create a collection of employee's information for your company. Each employee has the following attributes:

    Name
    Job title
    Salary
    Status

First, you will create an array named employees.

Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time" .

This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.

(e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time" )

You will then:

    Instantiate three employees
    Override the status attribute of one of them to either "Part Time" or "Contract"
    Call the printEmployeeForm method for each employee
    Put the generated employees into the employees array using whichever method you prefer.
*/