/*
            BITWISE OPERATORS
           ===================

    Used to perform operations on binary representations
*/

console.log("\n🔢 BITWISE OPERATORS");

let m = 5;  // Binary: 0101
let n = 3;  // Binary: 0011

// Bitwise AND (&)
console.log(`${m} & ${n} = ${m & n}`); // 0101 & 0011 = 0001 → 1

// Bitwise OR (|)
console.log(`${m} | ${n} = ${m | n}`); // 0101 | 0011 = 0111 → 7

// Bitwise XOR (^)
console.log(`${m} ^ ${n} = ${m ^ n}`); // 0101 ^ 0011 = 0110 → 6

// Bitwise NOT (~)
console.log(`~${m} = ${~m}`); // ~0101 = 1010 → -6 (in two's complement)

// Left shift (<<)
console.log(`${m} << 1 = ${m << 1}`); // 0101 << 1 = 1010 → 10

// Right shift (>>)
console.log(`${m} >> 1 = ${m >> 1}`); // 0101 >> 1 = 0010 → 2