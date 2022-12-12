const Pet = require('./pet')
const Character = require("./character");
const thunderfury = require("../weapons/thunderfury")
const lightHeal = require("../spells/lightheal")

class Shaman extends Character {
    constructor(name) {
        super(name, "shaman", 6, 6, 8, 3, 100, 100);
        this.pets = [];
        // every shaman starts with a Fire Elemental as its first pet!
        const fireElemental = new Pet("Fire Elemental", 4);
        this.pets.push(fireElemental);
        this.weapons.push(thunderfury);
        this.spells.push(lightHeal);
        
    }
}

module.exports = Shaman;