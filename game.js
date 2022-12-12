// this is where our game logic is going to go.
// we will put the mechanics of our game here, and slowly
// build it over the next few lessons.

// i want to create a new warlock in my game.
// the warlock is not located in this file. the warlock FACTORY, that is.
// the actual warlock itself should be located in this file. it's the game!

// how should i go about getting the warlock class from the other file?

const Warlock = require("./characters/warlock");
const Shaman = require("./characters/shaman");
const Mage = require("./characters/mage");

const warlock = new Warlock("horsey");
console.log(warlock);

const mage = new Mage("horsey mage");
console.log(mage);

const shaman = new Shaman("horsey shaman");
console.log(shaman);

shaman.levelUp();
console.log(shaman);

mage.levelUp();
console.log(mage);

warlock.summonPet("imp");
console.log(warlock);

shaman.summonPet("Fire Elemental");
console.log(shaman);

console.log(shaman.getDamage());