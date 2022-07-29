const log = s => console.log(s);

class Person{
    constructor(firstName, lastName, age, hobbies){
        if(typeof firstName == 'string'){
            this.firstName = firstName;
        } else log("First name must be a string");
        if(typeof lastName == 'string'){
            this.lastName = lastName;
        } else log("Last name must be a string");
        (typeof age == 'number') ? this.age = age : log("age must be a number");
        (typeof hobbies == 'object') ? this.hobbies = hobbies : log("hobbies must an object");
    } //no comma required

    introduce(){
        log(`My name is ${this.firstName} ${this.lastName}, `
        + `I'm ${this.age} years old, and I enjoy ${this.hobbies.join(", ").toLowerCase()}`);
    }

    //can only be accesed by the class, not instances of the class, see below
    static description = "Homo erectus, 4 limbs, 2 eyes, 1 nose, 2 ears";
};



const dave = new Person("Dave", "Stevenson", 23, ["biking", "drinking beer"]);
dave.introduce();
const stan = new Person("Stanley", "", 75, ["Carpentry", "shooting clay pigeons", "sleeping"]);
stan.introduce();

log('---------------')
log("Dave's description: " + dave.description);
log("Person's description: " + Person.description);