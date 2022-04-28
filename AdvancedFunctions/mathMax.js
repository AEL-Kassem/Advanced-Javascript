/**
 *Math.max() function 
 */
//Spread Operation will turn the mathList into a list of arguments
const mathList = [34, 80, 173, 3, 9];
console.log(Math.max(...mathList)) // Output: 173 

//example 2

let list1 = [23, -45, 6, 33];
let list2 = [9, 76, 91, -3];
console.log(Math.max(...list1, ...list2)); // Output: 91

//example 3

let ex1 = [ 1,3,5,7,9, 16];
let ex2=[2,4,16,17,8];
let ex3= [12,13,14,15];

console.log(Math.max(...ex1, ...ex2, ...ex3)); // Output: 17

// Spread syntax can be used to merge array. forexample:

let simple1 = [1,2,3,4];
let simple2 = [2,3,5,7];

let mergedArray = [0, ...simple1, 3, ...simple2  ]
console.log(mergedArray); 
/**
 * OUTPUT:
 * (10) [0, 1, 2, 3, 4, 3, 2, 3, 5, 7]
0: 0
1: 1
2: 2
3: 3
4: 4
5: 3
6: 2
7: 3
8: 5
9: 7
length: 10
 */
