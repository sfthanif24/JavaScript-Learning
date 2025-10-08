/*
            LOGICAL OPERATORS
           ===================

    Used to combine multiple conditions
*/

console.log("\n🧠 LOGICAL OPERATORS");

let age = 25;
let hasLicense = true;
let hasCar = false;

// Logical AND (&&)
console.log(`Age >= 18 && hasLicense: ${age >= 18 && hasLicense}`); // true && true → true
console.log(`Age >= 18 && hasCar: ${age >= 18 && hasCar}`); // true && false → false

// Logical OR (||)
console.log(`hasLicense || hasCar: ${hasLicense || hasCar}`); // true || false → true
console.log(`Age < 18 || hasCar: ${age < 18 || hasCar}`); // false || false → false

// Logical NOT (!)
console.log(`!hasCar: ${!hasCar}`); // !false → true
console.log(`!hasLicense: ${!hasLicense}`); // !true → false

// Complex logical expression
console.log(`Can drive: ${age >= 18 && hasLicense && !hasCar}`); // true && true && true → true