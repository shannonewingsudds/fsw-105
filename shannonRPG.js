const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name? ');

readlineSync.question(`Hello ${name}, You have landed on planet NoWhere. Thanos is close on your trail. Collect Infinity Stones and escape with your life. (Press Enter to Continue)`)

const enemies = ["Thanos", "Ultron", "Scarlet Witch", "Loki"];
const treasure = ["Mind Stone", "Soul Stone", "Time Stone", "Reality Stone", "Space Stone", "Power Stone"];
const infinityStones = [];
let playerHealth = 30;
const menu = ["Walk", "Abandon", "Health Bag", "Print"];
let collected = treasure[Math.floor(Math.random()*treasure.length)];
function game(){
    const attackPower = Math.floor(Math.random() * (6 - 4 + 3) + 6);
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemyHealth = 30;
    const enemyPower = Math.floor(Math.random()* (6 - 3 + 2) + 6); 

    const index = readlineSync.keyInSelect(menu, "What would you like to do?");

    if(menu[index] == "Abandon"){
        console.log (`${name} has Abadndoned planet NoWhere`);
        return playerHealth = 0;
    }
    else if (menu[index] == "print"){
        console.log(name + ": /n" + Playerhealth + "/ninfinityStones: " + pickup);
    }
    else if (menu[index] == "Health Bag"){
        console.log(`${name}'s Health Bag contains ${collected} \n Health Bar at ${playerHealth} out of 30`);
    }
    else if(menu[index] === "Walk"){
        let key = Math.random();
        if (key <= .3) {
            console.log("Walking...");
        }
        else if (key >= .3){
            console.log (`You have stumbled into  ${enemy}!`);
            while (enemyHealth > 0 && playerHealth > 0) {
                const player = readlineSync.question(`Will you run (press "r") or will you stand and attack? (press "a") `);
                    switch(player){
                        case 'r':
                            const run = Math.random();
                            if (run < .3){
                                console.log(`${enemy} is stronger and hits you for ${enemyPower} damage.`);
                            }
                            else {
                                console.log("You ran away!!");
                                break;
                            }
                        case 'a':
                            enemyHealth -= attackPower;
                            console.log(`You attacked ${enemy} for ${attackPower} damage.`);
                            playerHealth -= enemyPower;
                            console.log(`You were attacked for ${enemyPower} damage.`);
                            if (enemyHealth <= 0){
                                console.log(`You have killed the ${enemy} and found a ${collected}.`);
                                let loot = Math.random();
                                if (loot <= .3){
                                    infinityStones.push(collected);
                                }
                                }
                            else if (playerHealth <= 0){
                                console.log(`${enemy} has killed ${name}. GAME OVER`);
                            }
                            }

                    }
            }
        }
    }
 while(playerHealth > 0) {
    playerHealing = function(){
        playerAlive = true;
        playerHealth = 30
    }
    playerHealing();
    game();
} 

