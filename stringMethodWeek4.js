var str = "Hi";
var greeting = "Hello";

var str1 = "Good Morning!";
console.log("String's length is: " + str.length);
console.log("String-1's length is: " + str1.length);

var str2 = "Hello";

//display the first character of the string
console.log("First Character in String-2: " + str2[0]);
console.log("First Character in String-1: " + str1[0]);

//display the last character of the string
console.log("Last Character in String-1: " + str1[str1.length - 1]);
console.log("Last Character in String-1: " + str[str.length - 1]);

//concatenate mutiple strings together
var firstName = "John";
var lastName = "Smith";
var endName = "IV";
var whitespace = " ";
//var strName = firstName + whitespace + lastName + whitespace + endName;
//var strName = firstName + " " + lastName + " " + endName
var strName = firstName;
strName += whitespace;
strName += lastName + whitespace;
strName += endName;
console.log("Full name is: " + strName);

// string(n)
// " " + n
//n.toString()
var status = false;
var str3 = status.toString(); //false
console.log("String-3 Value: " + str3);
var back = Boolean(str); // true
console.log("String-3 converted back: " + back);

// >, >=, <, <=, ==

var result = 'a' < 'b';
console.log("Result's value is: " + result); //true

var result = 'a' < 'B';
console.log("Result's new value is: " + result); //false

// .concat() method
var helloGreeting = "Hello";
var greetingMessage = helloGreeting.concat(' ', 'John');
console.log("Greeting Message is: " + greetingMessage); 

//concatenate array elements
var colors = ["Blue", "Green", "Red"];
var colorResults = " ".concat(...colors);
console.log("Results of colors: " + colorResults); 

//concatenate non-string arguments
var str4 = " ".concat(1, 2, 3);
console.log("Value of string-4 is: " + str4); 

//.indexOf() method
//var index = str.indexOf(substr, [, fromIndex]);

//get th eindex of the first occurance of the substring in the string: finding substring in string
var str5 = "finsing substring in string";
var index = str5.indexOf('str');
console.log("Value of Index is: " + index);

//to count the number of occurrences of the substring "know" in this string: You do not know what you do not know until you know.
var str6 = "You do not know what you do not know until you know.";
var substr = "know";
var count = 0;
var index = str6.indexOf(substr);
while (index !== -1){
    count++;
    index = str6.indexOf(substr, index + 1);
}
console.log("VFinal Count: " + count);

var str7 = "JS indexOf";
var substr = "js";
//var index = str7.indexOf(substr);
//perform a case-insensitive search
var index = str7.toLocaleLowerCase().indexOf(substr.toLocaleLowerCase());
console.log ("Value of index this time is: " + index);

//.slice () methid to extract a substring from a string
// var substr = str.slice (startIndex [,endIndex]);

//get loal part of email address
var email = "john@bryanuniversity.edu";
var userName = email.slice (0, email.indexOf('@'));
console.log("User name extracted from the email addreess is: " + userName);

//trim() methods to remove characters from BOTH ends of a string
//var resutString = str.trim();
var str8 = "    JS trim   ";
var result = str8.trim();
console.log("Value of String-8 after applying TRIM method: " + result);

//trimStart() removes whitespace from the beginning of a string
//trimEnd() removes whitespace from the end of a string



