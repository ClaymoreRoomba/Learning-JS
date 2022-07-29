function add(a, b){
    return a + b;
}

const product = function(a, b){
    return a * b;
}

//arrow notation, 1 parameter does not require ()
const reverse = string => {
    //turn the string to an array of letters
    //reverse the array
    //join them with nothing in between (default: ',')
    //make it lowercase
    const reversed = string.split("").reverse().join("").toLowerCase();
    return reversed;
}

//implicit return, DO NOT INCLUDE {}
const subtract = (a, b) => a - b;

//... allows for infinte arguments, stored in an array
const getSmallest = (...values) => {
    //check each value
    for(let value of values){
        //if it's an object (array)
        if(typeof value == 'object'){
            //extract all elements
            for(let element of value){
                values.push(element);
            }
            //get rid of the array
            const index = values.indexOf(value);
            values.splice(index, 1);
        }
    }
    values.sort((a, b) => a - b);
    return values[0];
}



console.log(`7 + 8 = ${add(7,8)}`);
console.log(`9 x 6 = ${product(9, 6)}`);
console.log(`Lana backwards is: ${reverse("Lana")}`);
console.log(`20 - 87 = ${subtract(20, 87)}`);

const nums = [0, 6.9, 420, ""];
console.log(getSmallest(15, 3, 7, 2, nums, 10, 125, 5.6, 1, 28));
