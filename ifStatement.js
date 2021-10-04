//Preliminaries (15 points)
//Write an if statement that prints "is greater than" if 5 is greater than 3.
//Write an if statement that prints "is the length" if the length of "cat" is 3.  
//Hint: you will need to use .length() property for this requirement.
//Write an if/else statement that checks if the value "cat" is equal to the value "dog" and print "not the same" when they are not equal.  
//Ideally, you will declare two variables for this requirement, and assign "cat" and "dog" values to those two variables respectively.  
//Next, you will need to compare those values within an if/else statement.

var i = 10;
if (i > 15)
    console.log("10 is less than 15")
{
    //statements to execute if a sondition is true)
}

//Bronze Medal (15 points)
//Using the person object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough 
//(18 or older), and,  <theNameOfThePersonInObject> is not allowed to go to the movie if they are not older than 18.  Hint:  you will need to use person.age 
//in an if statement for this requirement.
//Using the same person object, only allow them into the movie if their name starts with "B".   
//Hint: there are a couple of ways you can meet this requirement, one suggestion is to try  person.firstName.charAt(0) 
//(Links to an external site.)  and see how to use it for this requirement.
//Using the same person object, only allow them into the movie if their name starts with "B" and they are older than 18.  
// Hint: you will need to use && within an if statement along with conditions you wrote for #1 and #2 above in order to meet this requirement.



var person = {
    firstName: "Bobby",
    age: 12
};

//Silver Medal (10 points):
//Write an if/else-if/else statement that prints "strict" if 1 strictly equals "1" , 
//prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
//Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4.


//Gold Medal (Optional Code Challenge):
//Pick at least one If statement from each: Preliminaries, Bronze Medal, and Silver Medal section and replace it with a ternary operator.
//Write an if statement that checks to see if "dog" is a string.  Hint: you will need to use typeof for this requirement.
//Write an if statement that checks to see if "true" is a Boolean.  Hint: you will need to use typeof for this requirement.
//Write an if statement that checks to see if a variable has been defined or not.  Hint: you will need to use typeof for this requirement.
//Write an if statement asking if "s" greater than 12 ?
//Try it with a few more letters and a few numbers.
//Write a ternary statement that uses console.log to display whether a number is odd or even. For example: 
//(It should continue to work correctly even if myNum changes to a different number).