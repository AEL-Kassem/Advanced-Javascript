"use strict"
let name = 'Fox', age = 23, message = 'Welcome';
let isSmall = 2 != 3;
alert ( isSmall ? 'False' : 'True')


//Prompt messages function
let numberString = prompt('Insert a number', 21);
alert(`  You have inserted this number: ${numberString}, is this true?`)
alert (` The number you've inserted is True 100%`);
// Confirm functions

let isTrue = confirm('Javascript is OOP Language!')
alert (isTrue)

//
let lastName = prompt('Please enter anything', '');
alert(lastName);

let one, two, three;
one = two = three = 5 + 8
console.log(one) // 5+8=13
console.log(two); // 5+8=13
console.log(three); // 5+8=13

// Modify-in-place
let x = 1;
x = x + 12;
x = x * 3; // 39

// Increment & Decrement
let number = 55;
number++;
alert (number) // 56

// example 
let example = 5;
let h = ++example;
console.log(h)// Output: 6






