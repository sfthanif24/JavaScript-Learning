/*
         JAVASCRIPT EVEN ODD PROGRAM
        =============================

    Today we'll learn to check if a number is Even or Odd
    Even Number: Divisible by 2 (remainder 0 when divided by 2)
    Odd Number: Not divisible by 2 (remainder 1 when divided by 2)

    We'll use the modulus operator (%) to find remainder
*/

let number = prompt("Enter a number: ");


if (number % 2 === 0) {
    console.log(`✅ ${number} is Even`);
} else {
    console.log(`❌ ${number} is Odd`);
}

