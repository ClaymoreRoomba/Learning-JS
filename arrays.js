/* check
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
for array methods and info
*/

//let arrays can be completely reasigned
let nums = [1, 2, 3, 4, 5];
nums = ["one", "two", "etc"];

//arrays can contain all data types
const things = ["dogs", "cats", 8, 6.9, true, {color: "red", size: 3}, [0, 1, 2]];
const animals = ["Fish", "Impala", "Leopard", "Iguana", "Parrot"];

//non mutable, takes out section (startIndex (included), endIndex (excluded))
const mammals = animals.slice(1, 3);
const name = animals.map(string => string[0]);

//join the elements into a string (seperator (default: ,))
console.log(name.join(''));
