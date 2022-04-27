const a = ('Z');
const b = ( 'A');
const c = a > b;
console.log(c); // True

/**
 * Comparison of different types
 */

alert ('2' > 4); // False
alert ('02' == 1);// false  
alert ('02' == 2);// True  

/**
 * Consequence
 * 
 */

let con = 0;
alert(Boolean(con)); // False

let con2 = '0';
alert(Boolean(con2)); // True
alert (con == con2); // True

// Equality
const box = 0;
const box2 = false;
console.log(box == box2); // True
console.log('' == false); // True
console.log( null === undefined ); // false
console.log( null == undefined ); // true


// 
alert( null > 0 );  // false
alert( null == 0 ); //  false
alert( null >= 0 ); // true
