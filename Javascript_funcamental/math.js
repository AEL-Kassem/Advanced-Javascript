alert ( 20 % 6);// 6, a remainder of 20 divided by 6
alert ( 45 % 4 ); // 1, a remainder of 45 divided by 4

/**
 * Exponentiation **
 */

alert ( 3 ** 3 ); // 27,  3³ = 3*3*3 = 27 

alert ( 4 ** (1/2)); // 2 (Power of 1/2 is the same as a square)

alert ( 8 ** 1/3); // 2.6666666666666665 , 2 (Power of 1/3 is the same as a square)

/** 
 * String concatination with binary +
*/

let concat = 'Some' + 'thing';
console.log(concat); //  Output: Something

alert ('7' + 5); // Output: '75';
alert ('9' + 2); // Output: '92';
alert ('Sit' + 'uat'+ 'tion'); // Output: 'Situation'
alert (98 - '3'); // Output: 95 >> converts String '3' to number 3;

// Numeric Conversion, unary +
let array = 2;
alert(+array); // Output: 2

// Assignment = return a value
let x = 3;
let y = 4;
let z = 5 - (x = y + 3);
alert (x + y + z); // Output: 9
alert (z); //Output: -2

/**
 * Chaning assignment
 */
let sum, sum2, sum3;
sum = sum1 = sum2 = 4 + 4;

alert (sum); // Output: 8
alert (sum1); // Output: 8
alert (sum2); // Output: 8 


/** 
 * Modify-in-place
*/


let c =  2;
c += 7; // now 2 + 7 = 9
c *= 2; // 9 * 2 = 18;
alert(c) ; // Output: 18


/** 
 * Increment & Decrement
*/

let variable = 34;
variable++;
alert (variable); // Output: 35



let decrement = 67;
decrement--;
alert(decrement); // Output:66

// Comma variables

let comma = (23 + 2, 44 + 2);
alert(comma); // Output: 44 + 2 = 46 (23 + 2 will ignored)

