//1.Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18. 

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];
console.log("----Requirement #1----");
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log("old enough");
    }
    else{
        console.log("not old enough");
    }
}

//2. Log to the console a personalized message like below.  Note, the only difference between this requirement and #1 l
//isted above is the below output requires you to use the name to make it more of a personalized message. 

console.log("----Requirement #2----");
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough to see Mad Max");
    }
    else{
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max");
    }
}

//3. Check to see if the movie goer is a male or female for an even more personalized message.
console.log("----Requirement #3----");
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough. SHE'S good to see Mad Max Fury Road.");
    }
    else{
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max Fury Road, don't let HIM in.");
    }
}

//4. Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, 
//print "Odd" to the console, otherwise print "Even".
console.log("----Requirement #4----");
