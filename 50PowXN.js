/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

 var myPow = function(x, n) {
   if (n===0) { return 1};
   if (n<0) {x = 1/x, n=-1*n};
    let prod = 1;
    for (let i = 1 ; i<=n ; i++)  prod *= x;
    return prod
;}

console.log("return: "+ myPow(3,5))
