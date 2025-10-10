/*
        JAVASCRIPT LEAP YEAR CHECKER
       ==============================

    Today we'll learn to check if a year is a Leap Year
    Leap Year Rules:
    1. Year divisible by 4 → Leap Year
    2. BUT if divisible by 100 → Not Leap Year  
    3. UNLESS also divisible by 400 → Leap Year

    Examples:
    Leap Years: 2000, 2004, 2008, 2012, 2016, 2020, 2024
    Not Leap Years: 1900, 2001, 2002, 2003, 2100
*/

let year = prompt("Enter a year: ");

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`✅ ${year} is a LEAP YEAR!`);
} else {
    console.log(`❌ ${year} is NOT a leap year`);
}

