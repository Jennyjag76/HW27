class Monster {
    constructor(typeOfMonster, name, strength) {
        this._typeOfMonster = typeOfMonster;
        this._name = name;
        this._strength = strength;
    }

    get typeOfMonster() {
        return this._typeOfMonster;
    }

    get name() {
        return this._name;
    }
    get strength() {
        return this._strength;
    }

    monAttack() {
        this._strength += 10;
        console.log("Makes the Monster Attack");
    }

}

let Monster1 = new Monster("Zombie", "Master Jen", 35);
Monster1.monAttack();
console.log(Monster1.monAttack);

console.log(Monster1.typeOfMonster);
console.log(Monster1.name);
console.log(Monster1.strength);

class EvolvedMonster extends Monster {
    constructor(typeOfMonster, name, strength, speed, weapon) {
        super(typeOfMonster, name, strength);
        this._speed = speed;
        this._weapon = weapon;
    }
    get speed() {
        return this._speed;
    }
    get weapon() {
        return this._weapon;
    }
}

let eMonster1 = new EvolvedMonster("Zombie", "Jen", 40, 10, "crossbow");
console.log(eMonster1._weapon);
console.log(eMonster1._typeOfMonster);
console.log(eMonster1._name);
console.log(eMonster1._speed);
console.log(eMonster1._strength);
eMonster1.monAttack();

let eMonster2 = new EvolvedMonster("Gorilla", "Jeremy", 35, 1, "Balloon")
console.log(eMonster2._weapon);
console.log(eMonster2._name);
console.log(eMonster2._strength);
console.log(eMonster2._speed);
console.log(eMonster2._typeOfMonster);