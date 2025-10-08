/*
            COMPARISON OPERATORS
           ======================

    Used to compare two values and return a boolean (true/false)
*/

console.log("\n⚖️ COMPARISON OPERATORS");

let num1 = 10;
let num2 = 5;
let num3 = 10;
let str = "10";

// Equal to (==)
console.log(`${num1} == ${num2}: ${num1 == num2}`); // → false
console.log(`${num1} == ${num3}: ${num1 == num3}`); // → true
console.log(`${num1} == "${str}": ${num1 == str}`); // → true (type coercion)

// Strict equal to (===)
console.log(`${num1} === ${num3}: ${num1 === num3}`); // → true
console.log(`${num1} === "${str}": ${num1 === str}`); // → false (different types)

// Not equal to (!=)
console.log(`${num1} != ${num2}: ${num1 != num2}`); // → true

// Strict not equal to (!==)
console.log(`${num1} !== "${str}": ${num1 !== str}`); // → true

// Greater than (>)
console.log(`${num1} > ${num2}: ${num1 > num2}`); // → true

// Less than (<)
console.log(`${num1} < ${num2}: ${num1 < num2}`); // → false

// Greater than or equal to (>=)
console.log(`${num1} >= ${num3}: ${num1 >= num3}`); // → true

// Less than or equal to (<=)
console.log(`${num2} <= ${num1}: ${num2 <= num1}`); // → true