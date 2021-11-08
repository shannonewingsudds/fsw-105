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

const employees = []

const Employee1 = new Employee("Kate Spade " , "President ", "$200,000 ");
const Employee2 = new Employee("Louis Vuitton " , "Vice President ", "$150,000 ");
const Employee3 = new Employee("Jimmy Choo " , "Chief Finance Offer ", "$100,000 ", "Contract");

function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
};
Employee.prototype.printEmployeeForm = function () {
    console.log("Name: " +  this.name + ",Job Title: " + this.jobTitle + ",Salary: " + this.salary + ",Status: " + this.status);
};

Employee1.printEmployeeForm();
Employee2.printEmployeeForm();
Employee3.printEmployeeForm();

employees.push(Employee1, Employee2, Employee3);