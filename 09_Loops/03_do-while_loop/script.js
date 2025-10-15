/*
            🚀 JAVASCRIPT DO-WHILE LOOPS
           ===============================

    Do-while loops execute the code block first, then check the condition
    Syntax: do { code } while (condition);
    Always executes at least once!
*/

/*
            BASIC DO-WHILE LOOP
           ======================
*/

console.log("\n🔢 BASIC DO-WHILE LOOP\n");

// Count from 1 to 5
let i = 1;
do {
    console.log("Count: " + i);
    i++;
} while (i <= 5);

// Count backwards from 5 to 1
console.log("\n🔙 COUNTING BACKWARDS:");
let j = 5;
do {
    console.log("Countdown: " + j);
    j--;
} while (j >= 1);

/*
            MULTIPLICATION TABLE
           =======================
*/

console.log("\n📊 MULTIPLICATION TABLE\n");

let number = 5;
let counter = 1;
console.log(`Multiplication Table for ${number}:`);
do {
    console.log(`${number} × ${counter} = ${number * counter}`);
    counter++;
} while (counter <= 10);