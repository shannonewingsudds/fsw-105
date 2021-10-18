//1. Write a function that accepts two numbers as parameters and returns the sum.
console.log("----Requirement #1----");

function additionNumbers(num1, num2)
{
  var sum = num1 + num2;
  console.log("Number-1: " + num1 + " added with Number-2: " + num2 + " Equals to: " + sum);
}
additionNumbers(10, 20);


//2. Write a function that accepts three numbers as parameters and returns the largest of those numbers.  
  //Hint: you will need to Math.max() to find the largest of all numbers provided as input.
console.log("      ")
console.log("----Requirement #2----");

function largeNumber(a, b, c)
{
  console.log("The largest number is: " + Math.max(a, b, c));
}
largeNumber(5, 10, 15);


//3. Write a function that accepts one number as a parameter and returns whether that number is even or odd. 
  //(Return the string "even" or "odd")
console.log("      ")
console.log("----Requirement #3----");

function myNumber(num3)
{
    if (num3 % 2 == 0){
      console.log(num3 + " Is Even");
    }
    else{
      console.log(num3 + " Is Odd");
    }
}
myNumber(12);
myNumber(13);


//4. Write a function that accepts a string as a parameter. If the length of the string is less than or equal 
  //to twenty characters long, return the string concatenated with itself (string + string). If the string is more 
  //than twenty characters long, return the first half of the string.  Hint: for the else part, you will need to use .slice()  
  //(Links to an external site.)  property in conjunction with .length() property.
console.log("      ")
console.log("----Requirement #4----");

function myString (string)
{
    if(string.length <= 20){
      console.log(string +  " " + string);
    }
    else{
      console.log(string.slice(0, string.length / 2));
    }
}
myString("Hello Javascript");
myString("Hello I am enjoying Javascript");
