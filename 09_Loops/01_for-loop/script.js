/*
            🚀 JAVASCRIPT FOR LOOPS
           ==========================

    For loops are used to repeat a block of code multiple times
    Syntax: for (initialization; condition; increment/decrement) { code }
*/

/*
            BASIC FOR LOOP
           =================
*/

console.log("\n🔢 BASIC FOR LOOP\n");

// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}

// Count backwards from 5 to 1
console.log("\n🔙 COUNTING BACKWARDS:");
for (let i = 5; i >= 1; i--) {
    console.log("Countdown: " + i);
}

/*
            MULTIPLICATION TABLE
           =======================
*/

console.log("\n📊 MULTIPLICATION TABLE\n");

let number = 5;
console.log(`Multiplication Table for ${number}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
}
