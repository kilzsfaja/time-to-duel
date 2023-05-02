class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }
  attack(target) {
    target.res -= this.power;
    console.log(`${this.name} attacked ${target.name} and reduced resilience to ${target.res}`);
  }
}

class Effect extends Card {
  constructor(name, cost, stat, magnitude) {
    super(name, cost);
    this.stat = stat;
    this.magnitude = magnitude;
  }

  play(target) {
    if (target instanceof Unit) {
      target.res += this.magnitude;
      target.power += this.magnitude;
      console.log(`${this.name} was played on ${target.name}`);
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 5);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgo = new Effect("Hard Algo", 2, "res", 3);
const promiseRejection = new Effect("Unhandled Promise Rejection", 1,"res", -2);
const pairProgramming = new Effect("Pair Programming", 3, "power", 2);

hardAlgo.play(redBeltNinja)
promiseRejection.play(redBeltNinja)
pairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja);

// console.log(redBeltNinja);
// console.log(blackBeltNinja);
// console.log(hardAlgo)
// console.log(promiseRejection)
// console.log(pairProgramming)
// console.log(blackBeltNinja);
// console.log(redBeltNinja);
