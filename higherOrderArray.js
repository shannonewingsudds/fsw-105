// Section A.1: Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr)
{

    const result = arr.filter(function(num){
        if (num >= 5)
        return  true;
    });
    return result;
}

console.log("--- Array Filter #1 ---");
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));  // Output: [6, 8]


// Section A.2: Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr)
{
    const result = arr.filter(function(num){
        if (num % 2 == 0)
        return true;
    });
    return result; 

}

console.log("--- Array Filter #2 ---");
console.log(evensOnly([3, 6, 8, 2]));  // Output: [6, 8, 2]

//Section A: Extra Credit: Make a filtered list of all the people who are old enough to see The Matrix (17+).

//!!!I tried so hard to do this one with no luck can you teel me what I am doing wrong!!!

function ofAge(arr)
{
    const result = arr.filter(function(person){
        return person.age >= 17;
    });
    return result;
}

console.log("--- Extra Credit for .filter() Method ---");
console.log(ofAge[
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])
//Output: 
//[ { name: "Angelina Jolie", age: 80 },
//    { name: "Bob Ziroll", age: 100 } ]


// Section B.1: Make an array of numbers that are doubles of the first array.

function doubleNumbers(arr)
{
    const result = arr.map (function (num) { 
        return num + num; 
    });
    return result;
} 

console.log("---  Array Map #1 ---");
console.log(doubleNumbers([2, 5, 100]));  // Output: [4, 10, 200]

// Section B.2: Take an array of numbers and make them strings.

function stringItUp(arr)
{
    const result = arr.map(function(num){ 
        return num.toString();
    });
    return result;
    
}

console.log("---  Array Map #2 ---");
console.log(stringItUp([2, 5, 100]));  // Output: ["2", "5", "100"]

//Section B.3: Capitalize first letter for each name within the array of names.

function capitalizeNames(arr)
{
    const result = arr.map(function(name){
        return name.charAt(0).toUpperCase() +  name.slice(1).toLowerCase();
    });
    return result; 
}

console.log("---  Array Map #3 ---"); 
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
//Output: ["John", "Jacob", "Jingleheimer", "Schmidt"]


// Section C.1: Turn an array of numbers into a total of all the numbers

function total(arr)
{
    const result = arr.reduce(function (num, finalAddition){
        finalAddition = finalAddition + num; // 0 + 1 = 1; 1 + 2 = 3; 3 + 3 = 6
        return finalAddition;
    });
    return result;
}

console.log("---  Array Reduce #1 ---");
console.log(total([1, 2, 3]));  // Output: 6

// Section C.2: Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr)
{
    const result = arr.reduce(function(num1, num2,){ 
        return num1.toString() + num2.toString();
    });
    return result;
}

console.log("---  Array Reduce #2 ---")
console.log(stringConcat([1, 2, 3]));   // Output: "123"

//Section C.3: Turn an array of voter objects into a count of how many people voted.  Note: You don't necessarily have to use 
//reduce for this, so try to think of multiple ways you could solve this.

    
function totalVoters(arr){
    result = voters.filter(person => person.voted).length;  

    return result;
}   
const voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary' , age: 31, voted: false},
    {name: 'Becky' , age: 43, voted: false},
    {name: 'Joey' , age: 41, voted: true},
    {name: 'Jeff' , age: 30, voted: true},
    {name: 'Zack' , age: 19, voted: false},
];


console.log("---  Array Reduce #3 ---")
console.log( totalVoters(voters) );  // Output: 7


// Section D.1: Sort an array from smallest number to largest.

function leastToGreatest(arr) {
    const result = arr.sort(function (num1, num2){
        return num1 - num2;
    });
    return result;
}

console.log("---  Array Sort #1 ---");
console.log( leastToGreatest([1, 3 , 5, 2, 90, 20]) );  //Output: [1, 2, 3, 5, 20, 90]

// Section D.2: Sort an array from largest number to smallest.

function  greatestToLeast(arr){
    const result = arr.sort(function (num1, num2){
        return num2 - num1;
    });
    return result;
}
    
console.log("---  Array Sort #2 ---")
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));  // Output: [90, 20, 5, 3, 2, 1]

// Section D.3: Sort an array from shortest string to longest. 

function lengthSort(arr) {
    const result = arr.sort(function (str1, str2){
        return str1.length - str2.length;
    });
    return result;
    
}

console.log("---  Array Sort #3 ---")
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));  // Output: ["by", "dog", "wolf", "eaten", "family"]

