//regex or RegExp stands for regular expression
//is a match case
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

//Example literal:
//literally "abc"
console.log("LITERAL ######################################");
const literal = /abc/;
const str1 = "Do you know your abc's?";
console.log(str1.match(literal));

//Meta-chars: see char classes
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
//a character from a-z, followed by a digit (\d)
console.log("META #########################################");
const meta = /[a-z]\d/;
console.log("I like to sk8board".match(meta));

/*
Quantifiers
Mods prev char, how many?
* = 0 or more
+ = 1 or more
? = 0 or 1
{min, max}
{n}
*/

//
const str3 = 
"A rainbow's color is many colours but is never a single colour";
//the u is optional, the s is optional
const clr = /colou?rs?/g; 
for(let match of str3.matchAll(clr)){
    console.log(`${match[0]} at index: ${match.index}`);
};

/*
Position
^ = beginning of line
$ = end of line
\b = word boundary
x(?=y) = match if x is followed by y, only matches x
x(?!y) = match if x is not followed by y,   ^
(?<=y)x = match if x is preceded by y,      ^
(?<!y)x = match if x is not preced by y,    ^
extra at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
*/

console.log("POSITIONAL ###################################");
const fruits = ["Apple", "Pear", "Cucumber", "Pineapple", "Avocado", "Star fruit"];
const fruitsWithA = fruits.filter(fruit => /^A/.test(fruit));
console.log(fruitsWithA);

const emails = ["filipk@icsz.ch", "johndoe@gmail.com", "foo.bar@yahoo.net", "donaldjtrump@thebest.org"];
const names = emails.map(email => email.match(/^[\w.]+/)[0]);
const mails = emails.map(email => email.match(/(?<=@)\w+\b/)[0]);
const domains = emails.map(email => email.match(/\.\w+$/)[0]);
console.log("names: " + names.join(", "));
console.log("mails: " + mails.join(", "));
console.log("domains: " + domains.join(", "));

const str4 = 
"There are a lot of phone numbers in this string such as "
+ "555-545-6734, and also 042.079.8956. "
+ "The problem is that they're all just stuck in this string "
+ "just like the number (292)846-9901.";

const numberFormat = /\b\(?\d{3}[-.)]\d{3}[-.]\d{4}\b/g;
const phoneNumbers = str4.match(numberFormat);
console.log(phoneNumbers);

/*
FLAGS
g = global, search entire string, not just first match
i = case insensitive
d = generate indices
m = multiline search
s = . now also is newline characters
u = treat a pattern as unicode?
y = perform a sticky search, starting from current pos in str
*/

console.log("FLAGS ########################################");
const str5 = "Me, myself, and I\nand you, and me, and us";
const mes = str5.match(/m\w*\b/gim);
console.log(mes);

/*
Groups
a section of the string stored in $
notated by surrounding parts of regex with ()
$0 is the entire string that matches the regex
$1, $2, etc
*/

console.log("GROUPS #######################################");
const str6 = "The name's Doe, John Doe";
//                  $1      $2      $3
const groupRe = /\b(\w+),\s(\w+)\b(.*)/;
//as $3 was 'captured' by the regex but not reimplemented, it gets deleted
console.log(str6.replace(groupRe, '$2 $1'));

const myNum = "Call me at 316-826-063-57 or 047-822-099-43";
//group stored with name (?<name>x) as opposed to (x)
const number = /(?<areaCode>\d{3})-\d{3}-\d{3}-\d{2}/;
//group data stored in index[1] of return array
//does not work with global regex as it returns array of matches
console.log(myNum.match(number));
console.log("Area code: " + myNum.match(number).groups.areaCode);

const quote = `Single quote " ' " and double quote ' " '`;
//store the result in group 1, apply it again with \1
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}

