const trimArray = " Web development ";

console.log(` 1- Original String: ${trimArray}`);
// Method trim()

console.log(` 2- Trimmed String : ${trimArray.trim()}`);

// another methods such as padStart() and padEnd()

const start = "starting point";
const middle = start.padStart(40);
console.log(start);
console.log(middle); // Will be pushed 30 tabs from start
console.log(middle.length);
/**
 * output: 
 *  1- Original String:  Web development 
 2- Trimmed String : Web development
starting point
                starting point
 */

const firstName = "PERSON";
const lastName = "john";

console.log(` 
Firstname: LOWERCASE ${firstName.toLocaleLowerCase()}
\n
Lastname: ${lastName.toLocaleUpperCase()} 
`);

