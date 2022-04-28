      function select(a, b) {
    let result = 1;

    // multiplying the result a * b in loop function
    for( let i = 0; i < b; i++){
        result *= a;
    }
    return result;
}
console.log(select(3, 3)) ; // output: 27 , this means 3³ =  3 x 3 x 3 = 27

// another example but the same:

function example(a, b) {
    if (b == 1) {
      return a;
    } else {
      return a * example(a, b - 1);
    }
  }
  
  alert( example(3, 3) ); // Output: the same 27;

  // We can use the shorter function : Ternary operator:
  function  exam(a, b) {
      return (b == 1) ? a : (a * exam(a, b -1))
  }
  console.log(exam( 2, 2 )) ; // Output:4
  console.log(exam( 3, 3 )) ; // Output:27
  console.log(exam( 3, 4 )) ; // Output:81
  console.log(exam( 3, 5 )) ; // Output:243 and so on.
