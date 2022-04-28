function sayNames(firstName, lastName, ... args){
    console.log(firstName + ' ' + lastName);

    console.log(args[0]);
    console.log(args[1]);
    console.log(args.length);
}
sayNames('Web', 'Develepment', '2020','Javascript')
/**
* Output:
* Web Develepment
* 2020
* Javascript
* 2 
*/
