const config = require("../config/classNames")
class Character {
    constructor(name, className, attack, magic, defense, speed, health, mana) {
        this.name = name;
        this.className = className;
        this.level = 1;
        this.attack = attack;
        this.magic = magic;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
        this.mana = mana;
        this.spells = [];
        this.weapons = [];
        this.pets = [];
        this.activePet = null;
    }

    levelUp() {
        this.level = this.level + 1;
        if(this.className === config.classNames.ShamanClassName) {
            console.log("levelling up", this.className);
            this.attack = this.attack + 1;
            this.health = this.health + 11;
            this.mana = this.mana + 2;
        } else if(this.className === config.classNames.MageClassName) {
            console.log("levelling up", this.className);
            this.mana = this.mana + 17;
            this.magic = this.magic + 1;
        } else if (this.className === config.classNames.WarlockClassName) {
            console.log("levelling up", this.className);
            this.health = this.health + 29;
            this.mana = this.mana + 11;
            this.speed = this.speed + 1;
        }
    }

    getDamage(spellName) {
        // i need a way to keep track of a user's active pet. if they have one, we get the pets damage, and add it
        // to the characters magic damage.
        if(spellName) {
            const spell = this.spells.find(s => s.name === spellName);
            if(!spell) return 0;
            if(this.mana < spell.mana) {
                console.log("not enough mana");
                return 0;
            }

            this.mana -= spell.mana;
            return spell.power + this.magic;
        } else if(this.activePet) {
            const petDamage = this.activePet.damage;
            return petDamage + this.magic;
        } else if(this.equippedWeapon) {
            const weaponDamage = this.equippedWeapon.damage;
            return this.attack + weaponDamage;
        }
    }

    summonPet(petName) {
        // if we have a pet in our this.pets array, that matches the name passed in as an argument to this function,
        // lets summon it.
        // we can loop over the pets we have to find it.
        for(let i =0; i < this.pets.length;i++) {
            const pet = this.pets[i]; // this pet is equal to an individual pet element in our pets array.
            if(pet.name === petName) {
                this.activePet = pet;
            }
        }
    }

    // add weapon adds a weapon to the user's array of weapons.
    addWeapon(weapon) {
        this.weapons.push(weapon);
    }

    // equip weapon equips a specific weapon from the users array of weapons.
    equipWeapon(weaponName) {
        for(let i=0; i <this.weapons.length;i++) {
            const weapon = this.weapons[i];
            if(weapon.name === weaponName) {
                this.equippedWeapon = weapon;
            }
        }
    }
}

module.exports = Character;