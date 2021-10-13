//1.  Make a function that will return any given string into all caps followed by the same string all lowercase.
console.log("----stringRequirement #1----");
function capitalizeAndLowercase(str){
    let upperAndLower = str.toUpperCase() + str.toLowerCase();
    return upperAndLower;

}

console.log (capitalizeAndLowercase("Hello"));  // => HELLOhello
console.log(capitalizeAndLowercase("HelloHowAreYou"));   // => HELLOHOWAREYOUhellohowareyou

//2. Make a function that returns a number half the length and rounded down. You'll need to use Math.floor()
console.log("----stringRequirement #2----");



findMiddleIndex("Hello");  // => 2
findMiddleIndex("Hello World");  // => 5

//3. Make a function that uses slice()  (Links to an external site.) and the other functions you've written 
//to return the first half of the string.
console.log("----stringRequirement #3----");


returnFirstHalf("Hello");  // => "He"
returnFirstHalf("Hello World");  // => "Hello"

//4.Make a function that takes a string and returns that string where the first half is capitalized, and the 
//second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
console.log("----stringRequirement #4----");

capitalizeAndLowerCase("Hello");  // => "HEllo"
capitalizeAndLowerCase("Hello World");  // => "HELLO world"

//Make a function that takes any string and capitalizes any character that follows a space.
console.log("----optionalCodeChallenge---");



capitalizeFirstLetter("hey friends! practice practice practice!"); // => "Hey Friends! Practice Practice Practice!"

