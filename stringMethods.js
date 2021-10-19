//1.  Make a function that will return any given string into all caps followed by the same string all lowercase.
console.log("----stringRequirement #1----");

function capitalizeAndLowercase(str){
    let upperAndLower = str.toUpperCase() + str.toLowerCase();
    return upperAndLower;

}

console.log (capitalizeAndLowercase("Hello"));  // => HELLOhello
console.log (capitalizeAndLowercase("HelloHowAreYou"));   // => HELLOHOWAREYOUhellohowareyou

//2. Make a function that returns a number half the length and rounded down. You'll need to use Math.floor()
console.log("    ");
console.log("----stringRequirement #2----");

function findMiddleIndex(str1){
    let middleIndex = str1.length;
    return Math.floor(middleIndex / 2);
}
console.log(findMiddleIndex("Hello"));  // => 2
console.log(findMiddleIndex("Hello World"));  // => 5

//3. Make a function that uses slice()  (Links to an external site.) and the other functions you've written 
//to return the first half of the string.
console.log("    ");
console.log("----stringRequirement #3----");

function returnFirstHalf(str2){
    let firstHalf = str2;
    return firstHalf.slice(0, str2.length / 2);
}
console.log(returnFirstHalf("Hello"));  // => "He"
console.log(returnFirstHalf("Hello World"));  // => "Hello"

//4.Make a function that takes a string and returns that string where the first half is capitalized, and the 
//second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
console.log("    ");
console.log("----stringRequirement #4----");




function capitalizeLowercase(str3){
    var lengthstr3 = str3.length;
    var firstHalf1 = "";
    var secondHalf1 = "";

for (var i =0; i < Math.floor(lengthstr3 / 2); i++) {
    firstHalf1 += str3[i];
}
for (var i = Math.floor(lengthstr3 / 2); i < lengthstr3; i++) {
    secondHalf1 += str3[i];
}
var newString = firstHalf1.toUpperCase();
var changedString = newString + secondHalf1.toLowerCase();
    if (changedString % 2 == 0){
    console.log(changedString + ": is Even");
    }
    else{
    console.log(changedString + ": is Odd");
    }
}

capitalizeLowercase("Hello");  // => "HEllo"
capitalizeLowercase("Hello World");  // => "HELLO world"

//Make a function that takes any string and capitalizes any character that follows a space.
console.log("    ");
console.log("----optionalCodeChallenge---");

function capitalizeFirstLetter(str4){
    var splitStr4 = str4.toLowerCase().split(" ");

    for (var i = 0; i < splitStr4.length; i++) {
        splitStr4[i] = splitStr4[i].charAt(0).toUpperCase() + splitStr4[i].substring(1); 
    }
    return splitStr4.join(" ");
}
console.log(capitalizeFirstLetter("hey friends! practice practice practice!"));

//capitalizeFirstLetter("hey friends! practice practice practice!"); // => "Hey Friends! Practice Practice Practice!"