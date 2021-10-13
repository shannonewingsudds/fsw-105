//Preliminaries (15 points)
//Write an if statement that prints "is greater than" if 5 is greater than 3.
//Write an if statement that prints "is the length" if the length of "cat" is 3.  
//Hint: you will need to use .length() property for this requirement.
//Write an if/else statement that checks if the value "cat" is equal to the value "dog" and print "not the same" when they are not equal.  
//Ideally, you will declare two variables for this requirement, and assign "cat" and "dog" values to those two variables respectively.  
//Next, you will need to compare those values within an if/else statement.

var p = 1;
const i = 5;
const animalC = "cat";
const animalD = "dog";
var person = {
    firstName: "Bobby",
    age: 12,
}
if (i > 3) {
    console.log("i is greater than 3");
}
if (animalC.length == 3) {
    console.log("3 is the length of cat");
}

if (animalC.length == animalD.length) {
    console.log("cat and dog are the same");
}
else{
    console.log("cat and dog are not the same");
}


//Bronze Medal (15 points)
//Using the person object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough 
//(18 or older), and,  <theNameOfThePersonInObject> is not allowed to go to the movie if they are not older than 18.  Hint:  you will need to use person.age 
//in an if statement for this requirement.

if (person.age >= 18){
    console.log(person.firstName + " " + "is allowed to go to the movies");
}
else{
    console.log(person.firstName + " " + "is not allowed to go to the movies");
}

//Using the same person object, only allow them into the movie if their name starts with "B".   
//Hint: there are a couple of ways you can meet this requirement, one suggestion is to try  person.firstName.charAt(0) 

if (person.firstName.charAt(0) == "B") {
    console.log(person.firstName + " " + "is allowed into the movies");
}
else {
    console.log(person.firstName + " " + "is not allowed into the movies");
}

//Using the same person object, only allow them into the movie if their name starts with "B" and they are older than 18.  
// Hint: you will need to use && within an if statement along with conditions you wrote for #1 and #2 above in order to meet this requirement.

if (person.age > 18 && person.firstName.charAt(0) == "B") {
    console.log(person.firstName + " " + "is only allowed because his name starts with B and he is older than 18");
}
else{
    console.log(person.firstName + " " + "is not allowed because his name starts with B but he is not older than 18");

}
//Silver Medal (10 points):
//Write an if/else-if/else statement that prints "strict" if 1 strictly equals "1" , 
//prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
//Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4.



if (p === 1){
    console.log("strict")
}
else if (p == "1"){
    console.log("loose");
}
else {
    console.log("not equal at all");
}
if (p <= 2 && (2 == 4)){
    console.log("yes");

}