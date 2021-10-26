//Iterative Method
console.log("FROM ITERATIVE METHOD");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

console.log("FROM A LOOP");
//Using loops
var i;
for (i = 0; i < 10; i++){
    console.log("Hello World");
}

console.log("WHILE LOOP");
//while (boolena condition)
//{
//  looping statements;
//}

//Javascript program to illustrate a WHILE LOOP
var x = 1;
//Exit when x becomes greater than 4
while (x <= 4)
{
    console.log("Value of x: " + x);

    //increment the value of x for next interation
    x++;
}

console.log("---FOR LOOP---");
/*
for )initialization condition; testing condition; increment/deincrement)
{
    statement(s);
}
*/

//Javascript program to illusrate the FOR LOOP

var x;

//for loop begins with x=2
//and runs until x <= 4
for (x = 2; x <= 4; x++){
    console.log("Value of x: " + x);
}


//1) Simple FOR LOOP example

for (var counter = 1; counter < 5; counter++)
{
    console.log("INSIDE THE LOOP: " + counter);
}
console.log("Outside the loop: " + counter);


console.log("2) For Loop without the initialization part");
var j = 1;
for (; j < 10; j += 2){
    console.log(j);
}