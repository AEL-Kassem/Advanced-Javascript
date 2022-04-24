//Advanced Javascript Training 2022
let testArray = [1,2,3,4];
console.log(testArray)
/**
 * OUTPUT:   
 *  [1,2,3,4]
 * 
 */
console.log(testArray.length)
/**
 * OUTPUT: 4
 */

let priceList= "€"
let newPriceList= "500"

console.log(`The Symbole of your price is : ${priceList}`)
console.log(`The Total price is in euro : ${newPriceList} ${priceList}`)
// the length of the price list:
console.log(`The length of euro sybol is:${priceList.length} and the totalprice is ${newPriceList.length}`)

/**
 * 
 */
console.log(String.fromCodePoint(8473 , 999, 888, 635))