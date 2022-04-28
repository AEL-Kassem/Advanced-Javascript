let school = { // the same object, compressed for brevity
    output: [{firstName: 'Alex', given: 33}, {firstName: 'Eyan', given: 10 }],
    student: {
      classes: [{firstName: 'Henry', given: 4}, {firstName: 'Joe', given: 73 }],
      rooms: [{firstName: 'Lama', given: 31}]
    }
  };
  
  // The function to do the job
  function sumSalaries(firstArray) {
    if (Array.isArray(firstArray)) { // case (1)
      return firstArray.reduce((pro, total) => pro + total.given, 0); // sum the array
    } else { // case (2)
      let sum = 0;
      for (let success of Object.values(firstArray)) {
        sum += sumSalaries(success); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
  }
  
  console.log(sumSalaries(school)); // The TotalSalaries is 151
