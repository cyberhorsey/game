// this is where our game logic is going to go.
// we will put the mechanics of our game here, and slowly
// build it over the next few lessons.

// i want to create a new warlock in my game.
// the warlock is not located in this file. the warlock FACTORY, that is.
// the actual warlock itself should be located in this file. it's the game!

// how should i go about getting the warlock class from the other file?

const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");

const prompt = require("prompt-promise");

const config = require("./config/classNames");
const mobs = require("./mobs/mobs")

// gameLoop will start and run our game, initializing everything it needs
// to spawn an instance of our game.
// we want to prompt the user to make decisions, so we need to use a prompting library.

async function gameLoop() {
    console.log("WELCOME TO " + config.gameName);
    // in my game loop, at the start, i want to get the class choice from the user.
    // they can pick shaman, warlock, or mage.

    // im going to store my character in this variable. once i pick a class,
    // i will create that class, and put it in the character variable.
    let character;

    const classChoice = await prompt("Select your class: shaman, warlock, or mage\n");
    console.log("my class choice is", classChoice);
    if(classChoice === config.classNames.MageClassName) {
        character = new Mage("Horsey");
    } else if(classChoice === config.classNames.ShamanClassName) {
        character = new Shaman("Horsey");
    } else if(classChoice === config.classNames.WarlockClassName) {
        character = new Warlock("Horsey");
    } else {
        throw Error("you typed a class that doesnt exist!")
    }

    // spawn a random mob, then lets prompt to fight it.
    // lets just take the first mob in the array, then if we beat it, we can fight the second one.
    let mob = mobs[0]; // this should be the goblin. mobs [1] should be the dragon
    console.log("A wild " + mob.name + " appears")
    console.log(mob.name + " has " + mob.health + " health")

    while(character.health > 0 && mob.health > 0) {
        // while BOTH my character AND the mob im fighting both have health, we fight.
        // when ONE of them stops having health, ie: its below 0 or equal to 0, this block will stop running.
        console.log("Your character's spells");
        console.log(character.spells);
        const move = await prompt("Select a move: fight, or spell\n")
        console.log("You selected: " + move);
        const damage = character.getDamage(move);
        console.log("You attack for " + damage);
        const mobDamage = mob.damage;
        console.log(mob.name + " hits you for " + mob.damage);
        mob.health = mob.health - damage;
        character.health = character.health - mobDamage;
        console.log("Your health is " + character.health);
        console.log(mob.name + "'s health is " + mob.health);
    }

    console.log("Fight over");
;}

gameLoop();