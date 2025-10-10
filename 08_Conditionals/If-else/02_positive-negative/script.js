/*
        JAVASCRIPT POSITIVE NEGATIVE PROGRAM
       ======================================

    Today we'll learn to check if a number is Positive, Negative, or Zero
    Positive Number: Greater than 0
    Negative Number: Less than 0  
    Zero: Equal to 0

    We'll use comparison operators (>, <, ===) to check numbers
*/

let number = prompt("Enter a number: ");

if (number > 0) {
    console.log(`➕ ${number} is Positive Number`);
} else if (number < 0) {
    console.log(`➖ ${number} is Negative Number`);
} else {
    console.log(`You entered Zero`);
}