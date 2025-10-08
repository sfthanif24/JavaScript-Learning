/*
                       JAVASCRIPT OPERATORS
                     ========================
    Operators are symbols that perform operations on operands (values/variables)

    Types of Operators:
    1. Arithmetic Operators
    2. Assignment Operators 
    3. Comparison Operators
    4. Logical Operators
    5. Bitwise Operators
    6. Ternary Operator
*/

console.log("🌟 JavaScript Operators Learning!");

/*
            OPERATOR PRECEDENCE
           =====================

    The order in which operations are performed
*/

console.log("\n🎯 OPERATOR PRECEDENCE");

let result1 = 10 + 5 * 2; // Multiplication first: 5*2=10, then 10+10=20
console.log(`10 + 5 * 2 = ${result1}`);

let result2 = (10 + 5) * 2; // Parentheses first: 10+5=15, then 15*2=30
console.log(`(10 + 5) * 2 = ${result2}`);

let result3 = 10 + 5 * 2 ** 3; // Exponentiation first: 2^3=8, then 5*8=40, then 10+40=50
console.log(`10 + 5 * 2 ** 3 = ${result3}`);

