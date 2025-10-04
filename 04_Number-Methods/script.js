/*
            🔢 Number Methods 🔢
           =======================

    Number methods help you work with numeric data
    Convert, format, and manipulate numbers

    Conversion:
    Number()    - Convert to number"
    parseInt()  - Convert to integer"
    parseFloat()- Convert to float"

    Formatting:         
    toFixed()       - Fixed decimal places"
    toPrecision()   - Significant digits"
    toExponential() - Scientific notation"

    Checking:
    isNaN()            - Check if Not a Number");
    isFinite()         - Check if finite number");
    Number.isInteger() - Check if integer")
 */

console.log("🔢 JavaScript Number Methods🔢\n");

// =====================
// Basic Number creation
// =====================
    let num1 = 123;          // Integer
    let num2 = 12.34;        // Decimal
    let num3 = 1.5e3;        // Scientific (1500)
    let num4 = 0xFF;         // Hexadecimal (255)
    let num5 = 0b1010;       // Binary (10)

    console.log("Integer:", num1);
    console.log("Decimal:", num2);
    console.log("Scientific:", num3);
    console.log("Hexadecimal 0xFF:", num4);
    console.log("Binary 0b1010:", num5);


// =========================
// Number conversion Methods
// =========================

    // String to Number
    let strNum = "123.45";

    console.log("\nString to Number Conversion:");
    console.log("Original string:", strNum);
    console.log("Number:", Number(strNum));
    console.log("Integer:", parseInt(strNum));
    console.log("Float:", parseFloat(strNum));

    // Different bases
    console.log("\nDifferent Bases:");
    console.log("parseInt('1010', 2):", parseInt("1010", 2));// Binary to decimal
    console.log("parseInt('FF', 16):", parseInt("FF", 16));// Hex to decimal
    console.log("parseInt('10', 8):", parseInt("10", 8));// Octal to decimal


// ========================
// Number Formating Methods
// ========================
    let price = 1234.5678;
    let largeNumber = 1234567.89;

    console.log("\nNumber Formatting:");
    console.log("Original number:", price);
    console.log("toFixed(2):", price.toFixed(2));//2 decimal places
    console.log("toFixed(0):", price.toFixed(0)); //No decimals
    console.log("toPrecision(5):", price.toPrecision(5));//5 total digits
    console.log("toExponential(2):", price.toExponential(2));//Scientific notation

    console.log("\nLarge Number Formatting:");
    console.log("Original:", largeNumber);
    console.log("toLocaleString():", largeNumber.toLocaleString());//Local format


// =======================
// Number checking Methods
// =======================
    let validNum = 42;
    let notANum = NaN;
    let infiniteNum = Infinity;
    let stringNum = "123";

    console.log("\nNumber Checking:");
    console.log(`isNaN(${validNum}):`, isNaN(validNum));
    console.log(`isNaN(${notANum}):`, isNaN(notANum));
    console.log(`isNaN("sft"):`, isNaN("sft"));
    console.log(`isFinite(${validNum}):`, isFinite(validNum));
    console.log(`isFinite(${infiniteNum}):`, isFinite(infiniteNum));
    console.log(`Number.isInteger(${validNum}):`, Number.isInteger(validNum));
    console.log(`Number.isInteger(${num2}):`, Number.isInteger(num2));


