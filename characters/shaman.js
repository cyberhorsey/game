const Pet = require('./pet')
const Character = require("./character");
const thunderfury = require("../weapons/thunderfury")
const lightHeal = require("../spells/lightheal");
const config = require('../config/classNames');

class Shaman extends Character {
    constructor(name) {
        super(name, config.classNames.ShamanClassName, 6, 6, 8, 3, 100, 100);
        // every shaman starts with a Fire Elemental as its first pet!
        const fireElemental = new Pet("Fire Elemental", 4);
        this.pets.push(fireElemental);
        this.weapons.push(thunderfury);
        this.spells.push(lightHeal);
    }
}

module.exports = Shaman;