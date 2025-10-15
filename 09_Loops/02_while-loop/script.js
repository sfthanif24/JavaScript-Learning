/*
            🚀 JAVASCRIPT WHILE LOOPS
           ============================

    While loops repeat a block of code while a condition is true
    Syntax: while (condition) { code }
*/

/*
            BASIC WHILE LOOP
           ===================
*/

console.log("\n🔢 BASIC WHILE LOOP\n");

// Count from 1 to 5
let i = 1;
while (i <= 5) {
    console.log("Count: " + i);
    i++;
}

// Count backwards from 5 to 1
console.log("\n🔙 COUNTING BACKWARDS:");
let j = 5;
while (j >= 1) {
    console.log("Countdown: " + j);
    j--;
}

/*
            MULTIPLICATION TABLE
           =======================
*/

console.log("\n📊 MULTIPLICATION TABLE\n");

let number = 5;
let counter = 1;
console.log(`Multiplication Table for ${number}:`);
while (counter <= 10) {
    console.log(`${number} × ${counter} = ${number * counter}`);
    counter++;
}


/*
            EVEN NUMBERS 
           =============
*/

console.log("\n🔢 EVEN NUMBERS 1-20\n");

let num = 1;
console.log("Even numbers from 1 to 20:");
while (num <= 20) {
    if (num % 2 === 0) {
        console.log(`✅ ${num} is even`);
    }
    num++;
}