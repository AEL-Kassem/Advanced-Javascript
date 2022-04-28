/**
 * Replace one string just
 */
const text = 'The following word will be replaced now'
let result = text.replace('now', 'later')
console.log(result)


let numbers = ('1 2 3 4 5 6');
let repNum = numbers.replace('3', '45')
console.log(repNum) //output: 1 2 45 4 5 6;

/**
 * 
 * Replace multples of strings
 */
const reload = /\d{4}/g;
const test = 'Server is running on Port: 5000,  yes on Port: 4200';
const lastResult = test.replace(reload,'8000')
console.log(lastResult);
// Output: Server is running on Port: 8000,  yes on Port: 8000


