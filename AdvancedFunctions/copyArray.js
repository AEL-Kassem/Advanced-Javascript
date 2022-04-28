const copy = [ 222, 333, 444, 555 ];
const copiedArray = [...copy]; 
/*
 it will be spreaded into a list of parameters then puting the copied result into new array
*/

alert(JSON.stringify(copy) === JSON.stringify(copiedArray)); // it will be true

//console.log(copy === copied); // output false because they haven't the same reference';


// if we modify the initial array doesnot modify the copy;
copy.push(4);
console.log(copy); // 
console.log(copiedArray); //
/**
 * OUTPUT 
 * 
 * true
   [222, 333, 444, 555, 4]
   [2221: 3332: 4443: 5554]: 
 */
