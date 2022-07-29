const person = {
    _firstName: "Dick",
    _lastName: "Johnson",
    _age: 37,
    hobbies: ["Bowling", "Brewing beer"],

    get name(){
        if(this._firstName && this._lastName){
            return this._firstName + " " + this._lastName;
        } else {
            return "Missing first or last name";
        }
    },

    set age(num){
        if(typeof num == 'number' && num >= 0){
            this._age = age
        } else {
            console.log("Age is just a number");
        }
    }
}

//as these were prefixed with 'get'/'set', they no longer require brackets to work: person.name()
console.log(person.name);
person.age = "not a number";
console.log(person._age);
person.age = 40;
console.log(person._age);