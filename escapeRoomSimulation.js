var readlineSync = require('readline-sync');
 
// Request player's name
var playerName = readlineSync.question('May I have your name please? ');

const welcomeMessage = `Welcome, ${playerName} to the Escape Room Game Simulation!`;
console.log(welcomeMessage);

//Boolean Flags
var hasKey = false;
var isAlive = true;

while(isAlive == true) {
    const menuSelction = readlineSync.keyIn("Enter 1 to put hand in hole, Enter 2 to find the key, or Enter 3 to poen the door", {limit: "$<1-3>"});
    if (menuSelction == 1){
        //display dead message, game over
        console.log(`Oh No, ${playerName}, it appears you put your hand in the hole. You are DEAD, unfortunately! The Game is over `);
        isAlive = false;

    }else if (menuSelction == 2 && hasKey == false){
        //player has not found the key, display
        console.log(`Great job, ${playerName}, you have found the key successfully. Please proceed to the next menu option.`);
        hasKey = true;

    }else if (menuSelction == 2 && hasKey == true){
        //player has found the key
        console.log(`${playerName}, you have ALREADY found the key stop waisting time. Please proceed to the next menu option.`);

    }else if (menuSelction == 3 && hasKey == false){
        //player has not found the key
        console.log(`${playerName}, to be able to escape the room successfully, you will need to find the key by visiting menu option 2 first.`);

    }else if (menuSelction == 3 && hasKey == true){
        //player has found the key, exitx successfully, game over
        console.log(`Great job, ${playerName}, you have found the key successfully, and you have opened the exit door successfully. `);
        console.log(`Congratulations, ${playerName}, you escaped the game room successfully! Great Job! `);
        isAlive = false;
    }

}