/*🎯
           JavaScript Date Types
         =========================

      Type	              Description

    1. String	  A text of characters enclosed in quotes.
    2. Number	  A number representing a mathematical value.
    3. Bigint	  A number representing a large integer.
    4. Boolean	  A data type representing true or false.
    5. Object	  A collection of key-value pairs of data.
    6. Null       A primitive value representing object absence.
    7. Undefined  A primitive variable with no assigned value.
    8. Symbol	  A unique and primitive identifier.

*/

// =================================
// 1. String - Text data
// =================================
    let myName = "SFT Hanif";
    console.log("1. String:");
    console.log("Name:", myName);
    console.log("Type:", typeof myName);
    console.log("");

// =================================
// 2. Number - Numeric data
// =================================
    let age = 21;
    console.log("2. Number:");
    console.log("Age:", age);
    console.log("Type:", typeof age);
    console.log("");

// =================================
// 3. BigInt - Large integers
// =================================
    let bigNumber = 123456789012345678901234567890n;
    console.log("3. BigInt:");
    console.log("Large Number:", bigNumber);
    console.log("Type:", typeof bigNumber);
    console.log("");

// =================================
// 4. Boolean - True/False values
// =================================
    let isStudent = true;
    console.log("4. Boolean:");
    console.log("Student:", isStudent);
    console.log("Type:", typeof isStudent);
    console.log("");

// =================================
// 5. Object - Key-value pairs
// =================================
    let person = {
        name: "SFT Hanif",
        age: 21,
        city: "Chittagong"
    };
    console.log("5. Object:");
    console.log("Name:", person);
    console.log("Type:", typeof person);
    console.log("");

// =================================
// 6. Null - Intentional empty value
// =================================
    let emptyValue = null;
    console.log("6. Null:");
    console.log("Value:", emptyValue);
    console.log("Type:", typeof emptyValue); 
    console.log("");

// =================================
// 7. Undefined - Not assigned value
// =================================
    let notAssigned;
    console.log("7. Uudefined:");
    console.log("Value:", notAssigned);
    console.log("Type:", typeof notAssigned);
    console.log("");

// =================================
// 8. Symbol - Unique identifier
// =================================
    let uniqueId = Symbol("id");
    console.log("8. Symbol:");
    console.log("Symbol:", uniqueId);
    console.log("Type:", typeof uniqueId);
    console.log("");


// Exceptional, Arrays are objects
// =================================
// 9. Array - List of values
// =================================
    let colors = ["red", "green", "blue"];
    console.log("9. Array:");
    console.log("Value:", colors);
    console.log("Type:", typeof colors); 
    console.log("");


// =================================
// 🎯 Summary Table of Data Types
// =================================
console.log("=".repeat(35));
console.log("📊 DATA TYPES SUMMARY");
console.log("=".repeat(35));

console.log("String    →", typeof "sfthanif");
console.log("Number    →", typeof 21);
console.log("BigInt    →", typeof 123n);
console.log("Boolean   →", typeof true);
console.log("Object    →", typeof {name: "Hanif"});
console.log("Null      →", typeof null);
console.log("Undefined →", typeof undefined);
console.log("Symbol    →", typeof Symbol());
console.log("Array     →", typeof [1, 2, 3]);

