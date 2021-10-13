//Bronze Medal (15 points)





//Using the person object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough 
//(18 or older), and,  <theNameOfThePersonInObject> is not allowed to go to the movie if they are not older than 18.  Hint:  you will need to use person.age 
//in an if statement for this requirement.
var person = {
    firstName: "Bobby",
    age: 12
}
if (person.age > 18){
    console.log(person.firstName + " " + "is allowed to go to the movies");
}
else{
    console.log(person.firstName + " " + "is not allowed to go to the movies");
}

//Using the same person object, only allow them into the movie if their name starts with "B".   
//Hint: there are a couple of ways you can meet this requirement, one suggestion is to try  person.firstName.charAt(0) 

if (person.firstName.charAt(0)){
    console.log(person.firstName + " " + "is allowed into the movies");
}
else {
    console.log(person.firstName + " " + "is not allowed into the movies");
}


//Using the same person object, only allow them into the movie if their name starts with "B" and they are older than 18.  
// Hint: you will need to use && within an if statement along with conditions you wrote for #1 and #2 above in order to meet this requirement.

if (person.age > 18 && person.firstName.charAt(0)){
    console.log(person.firstName + " " + "is only allowed because his name starts with B and he is older than 18");
}
else{
    console.log(person.firstName + " " + "is not allowed because his name starts with B and he is not older than 18");
}
