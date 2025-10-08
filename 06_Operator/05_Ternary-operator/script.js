/*
            TERNARY OPERATOR
           ===================

    A shorthand for if-else statement
    Syntax: condition ? expression1 : expression2
*/

console.log("\n❓ TERNARY OPERATOR");

let userAge = 20;
let canVote = userAge >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log(`Age: ${userAge}, Can vote? ${canVote}`);

let temperature = 25;
let weather = temperature > 30 ? "Hot" : temperature > 20 ? "Warm" : "Cool";
console.log(`Temperature: ${temperature}°C, Weather: ${weather}`);

let isMember = true;
let discount = isMember ? 20 : 5;
console.log(`Member: ${isMember}, Discount: ${discount}%`);
