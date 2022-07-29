const PC = {
    CPU: "Ryzen 7 3900x",
    GPU: {
        company: "Nvidia",
        memory: 8,
        model: "RTX 2080 Super",
        numOfFans: 3
    },
    //RAM is a list of objects
    RAM: [
        {
            mem: 16,
            freq: 3600
        },
        {
            mem: 16,
            freq: 3600
        }
    ],
    case: "Meshify C",
    "turned on": false,
    isCool: true,

    //functions, can't use arrow notation as it makes 'this' reference the function
    turnOff: function(){
        this["turned on"] = false;
    },
    turnOn(){
        //need to use 'this' keyword as the obj is not implied cuz y tf not (C++ is better)
        this["turned on"] = true;
    }

}; // <-- notice semicolon, just a declaration so not NEEDED but allowed





//can access with dots
ramStick = PC.RAM[0];
//brackets can be used instead of dots, allows for the use of strings and variables
if(PC["turned on"]) PC.turnOff();
const desiredComponent = "GPU";
console.log(PC[desiredComponent]);

//use functions
PC.turnOn();
console.log(PC["turned on"]);

//create a new key and value
PC.cooling = {
    numOfFans: 3,
    type: "air"
}

//can delete props/elements of objects
delete PC.isCool;

//passby function
const unplug = obj => {
    obj["turned on"] = false;
}
unplug(PC);

let GPUName = "";
//iterate through elements in an object
for(let info in PC.GPU){
    //stores the name of the element as a string in the var
    if(typeof PC.GPU[info] == 'string'){
        //info is now just a string, therefore it can only be used to locate
        GPUName += " " + PC.GPU[info];
    }
}
console.log(GPUName);