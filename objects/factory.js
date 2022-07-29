const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
};
const ghost = monsterFactory('Ghastly', 300, 'soul', "uwu");

//shorthand notation
const robotFactory = (model, mobile) => {
    return {
        //key called model, value of model argument
        model,
        mobile
    }
};

const tinCan = robotFactory('TX-9000', true);

//destructured assignment, takes the age key from the obj
const { age } = ghost;

/*BUILT IN METHODS, look at:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
for more object methods */

const monsterKeys = Object.keys(ghost);
console.log(monsterKeys);

//returns an array of arrays
const ghostEntries = Object.entries(ghost);
console.table(ghostEntries);

//Object.assign(target, source); adds source to the target, then returns that new object
//IS MUTABLE
const rustBucket = Object.assign({isBroken: true}, tinCan);
console.table(tinCan);
console.table(rustBucket);