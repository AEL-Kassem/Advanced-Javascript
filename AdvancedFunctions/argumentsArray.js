// Gather all arguments into array args!
function addSummaryArguments(...args) {
    let total = 0;
    for (let arg of args) total += arg;
    return total;
}
console.log(addSummaryArguments(34)); // Output:34
console.log(addSummaryArguments(3)); // Output:3
console.log(addSummaryArguments(31)); // Output:31
console.log(addSummaryArguments(32)); // Output:32
