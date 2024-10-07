//Swap the Values of Two Variables
let var1 = 5;
let var2 = 10;

let temp;

temp = var1;
var1 = var2;
var2 = temp;

console.log("var1:", var1);
console.log("var2:", var2);

// Type coercion
let result = 3 + 2 + "7";

// When adding 3 and 2 (Numbers) to "7" (a String), Js performs type coercion. 5 + "7" Should be 57
console.log(result);
