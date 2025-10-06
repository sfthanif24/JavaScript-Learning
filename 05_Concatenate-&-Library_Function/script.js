/*
           String Concatenation
          ======================
  
    Multiple ways to combine/join strings together
    + operator, template literals, concat() method, etc.
 */

// =========================================
// Basic String Concatenation with +operator
// =========================================

let firstName = "sft";
let lastName = "Hanif";
let age = 21;

// Simple concatenation
let fullName = firstName + " " + lastName;
console.log("\nFull Name:", fullName);

// Multiple concatenations
let greeting = "I am " + firstName + " " + lastName + "! I am " + age + " years old.";
console.log("Greeting:", greeting);

// Concatenation with numbers
let sentence = "I have " + 3 + " apples and " + 2 + " oranges.";
console.log("Number concatenation:", sentence);


// =====================================
// 📝Template literals (ES6 Modern way)
// =====================================

// Using backticks and ${}
let modernGreeting = `Hello, ${firstName} ${lastName}! You are ${age} years old.`;
console.log("\nTemplate Literal:", modernGreeting);

// Multi-line strings
let multiLine = `
    User Information:
    Name: ${firstName} ${lastName}
    Age: ${age}
    Status: Active
`;
console.log("Multi-line string:", multiLine);

// Expressions inside template literals
let calculation = `The sum of 5 and 3 is ${5 + 3}`;
console.log("Expression in template:", calculation);


// ====================
// 🔗 Concate() Method
// ====================

let str1 = "Hello";
let str2 = "World";
let str3 = "JavaScript";

// Basic concat
let result1 = str1.concat(" ", str2);
console.log("\nconcat two strings:", result1);

// Multiple concat
let result2 = str1.concat(" ", str2, " ", str3, "!");
console.log("concat multiple:", result2);

// Chaining concat
let result3 = str1.concat(" ").concat(str2).concat("!");
console.log("chained concat:", result3);


// ===============================
// 🧩 Array join() concate method
// ===============================

let words = ["I", "love", "JavaScript", "programming"];
let colors = ["red", "green", "blue"];

// Join with space
let sentence1 = words.join(" ");
console.log("\nJoin with space:", sentence1);

// Join with comma
let sentence2 = words.join(", ");
console.log("Join with comma:", sentence2);

// Join with custom separator
let colorString = colors.join(" | ");
console.log("Join with custom separator:", colorString);

// Join without separator
let noSpace = words.join("");
console.log("Join without space: ", noSpace);


/*
               String Library Function
               =======================

  Built-in string methods for manipulation, search, transformation
 */

let text = "Hello Hanif! Welcome to js programming World.";
let email = "  sfthanif24@gmail.com  ";
let username = "sfthanif";

// 1. length - Get string length
console.log("1. length:", text.length);

// 2. toUpperCase() - Convert to uppercase
console.log("2. toUpperCase():", text.toUpperCase());

// 3. toLowerCase() - Convert to lowercase
console.log("3. toLowerCase():", text.toLowerCase());

// 4. trim() - Remove spaces from both ends
console.log("4. trim():", "'" + email.trim() + "'");

// 5. includes() - Check if string contains substring
console.log("5. includes('JavaScript'):", text.includes("JavaScript"));

// 6. replace() - Replace first occurrence
console.log("6. replace('World', 'Universe'):", text.replace("World", "Universe"));

// 7. split() - Split string into array
console.log("7. split(' '):", text.split(" "));

// 8. match() - Search with regex
console.log("8. match(/a/g):", text.match(/a/g));

// 9. indexOf() - Find position of substring
console.log("9. indexOf('programming'):", text.indexOf("programming"));

// 10. startsWith() - Check if starts with
console.log("10. startsWith('Hello'):", text.startsWith("Hello"));

// 11. endsWith() - Check if ends with
console.log("11. endsWith('programming.'):", text.endsWith("programming"));

// 12. charAt() - Get character at position
console.log("12. charAt(0):", text.charAt(0));

// 13. concat() - Join strings
console.log("13. concat():", "Hello".concat(" ", "World"));

// 14. repeat() - Repeat string
console.log("14. repeat(3):", "Hi! ".repeat(3));

// 15. slice() - Extract part of string
console.log("15. slice(6, 16):", text.slice(6, 16));
