//You are going to create a calculator in pure JavaScript using NodeJS and readline-sync.
/*
Your script must have:

    A function that adds two numbers and returns the result
    A function that multiplies two numbers and returns the result
    A function that divides two numbers and returns the result
    A function that subtracts two numbers and returns the result
    Each function will have 2 parameters, num1, num2
    On the console the prompt will print to the user:
    Please enter your first number (store that number)
    Please enter your second number (store that number)
    Please enter the operation to perform: add, sub, mul, div (then store the operation)
    Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
    You will then print to the console: The result is: [the result]
*/

const readlineSync = require('readline-sync');

var firstNum = readlineSync.questionInt("Please enter your first number: ");
var secondNum = readlineSync.questionInt("Please enter your second number: ");
var enterOperation = readlineSync.question("Please enter the operation to perform (add, sub, mul, div): ");

//function to perform addition operation
function myAddition(num1, num2){
    return num1 + num2;
}
//function to perform subtraction operation
function mySubtraction(num1, num2){
    return num1 - num2;
}
//function to perform multiplication operation
function myMultiplication(num1, num2){
    return num1 * num2;
}
//function to perform division operation
function myDivision(num1, num2){
    return num1 / num2;
}

function customCalculator(num1, num2, myOperation){
    if (myOperation == "add"){
        //call the addition function
        console.log("Number-1: " + num1 + " added with Number-2: " + num2 + " the result is: " + myAddition(num1, num2));
    
    }else if (myOperation == "sub"){
        //call the subtraction function
        console.log("Number-1: " + num1 + " subtracted from Number-2: " + num2 + " the result is: " + mySubtraction(num1, num2));

    }else if (myOperation == "mul"){
        //call the multiplication function
        console.log("Number-1: " + num1 + " multiplied with Number-2: " + num2 + " the result is: " + myMultiplication(num1, num2));
    
    }else if (myOperation == "div"){
        //call if the division function
        console.log("Number-1: " + num1 + " divided by Number-2: " + num2 + " the result is: " + myDivision(num1, num2));
    
    }else{
        //User provide a different operation function
        console.log("Operation not identified.  Please try again!");
    }
}
//Function Call
customCalculator(firstNum, secondNum, enterOperation);