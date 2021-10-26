function functionName (parameter){
    //function body
}
   
function say(){
    //lines of code
}

function square(a){
    //lines of code
}
function add(a, b){
    //lines of code
}


function say(message){
    console.log(message);
}

//functionName(arguments);

var resultS = say("Hello");
console.log("Result is: " + resultS);

//return expression;

//function add(a, b){
    //lines of code 
   // return a + b;
//}

var sum = add(10, 25);
console.log("Sum is: " + sum);

function compare(a, b){
    if (a > b){
        return -1;
    }
    else if (a < b){
        return 1;
    }
    return 0;
}

console.log(compare (10, 25));

function say(message){
    ///show nothing if the message is empty
    if (! message){
        return;

    }
    console.log(message);
}
say("Hello World");

function add(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

/*
console.log(add(1, 2, 3, 4, 5));

var showMessage = function (){
    console.log("Hello World!");
};

showMessage();

var sayHello = function (firstName){
    console.log("Hello, " + firstName);
}

sayHello("Bill");
*/

function showMessage(firstName){
    function sayHello(){
        console.log("Hello, " + firstName + " , how are you?");
    }
    return sayHello();
}

showMessage("Steve");
