/*
                   Variables
                  ===========

Three ways to declare variables:
  1. var (function-scoped, older way)
  2. let (block-scoped, modern)
  3. const (block-scoped, cannot be reassigned)
*/

// =================================
// 1. var - Function Scoped
// =================================
var userName = "sfthanif";
var userAge = 21;

console.log("Name:", userName);
console.log("Age:", userAge);

// Reassigning var variables
userName = "Hanif";
userAge = 21;

console.log("Name:", userName);
console.log("Age:", userAge);


// =================================
// 2. let - Block Scoped (Modern)
// =================================
    let price = 999.99;
    let inStock = false;

    console.log("Price: $" + price);
    console.log("In Stock:", inStock);

// Reassigning let variables
    price = 899.99; // Price dropped!
    inStock = true; // Now in stock!

    console.log("New Price: $" + price);
    console.log("Stock Updated:", inStock);


// =================================
//   3. const - Constant Values
// =================================
    const pi = 3.14159;
    const companyName= "SHT";

    console.log("PI Value:", pi);
    console.log("Company:", companyName);

/*
  const cannot be reassigned (this would cause error):
  pi = 3.14; // ❌ Uncommenting this will cause error
*/ 


/*
                   Identifiers
                 ===============

Identifiers are names given to variables, functions, classes, etc.
They follow specific naming rules:

  1. Names can contain letters, digits, underscores, and dollar signs.
  2. Names must begin with a letter, a $ sign or an underscore (_).
  3. Names are case sensitive (SH is different from sh).
  4. Reserved words (JavaScript keywords) cannot be used as names.
  5. Names cannot contain spaces.

  Note: Numbers are not allowed as the first character in names.


=================================
     ✅ VALID IDENTIFIERS
=================================
  let firstName = "SFT";//Camel case
  let user_name = "Hanif";//using underscore
  let _age = 21;//start with underscore
  let $price = 23.99;//using $ sign



=================================
     ❌ INVALID IDENTIFIERS
=================================
  let 123abc = "test";         ❌ Cannot start with number
  let my-name = "John";        ❌ Cannot use hyphen
  let let = "reserved";        ❌ Cannot use reserved word
  let my name = "test";        ❌ Cannot have spaces

*/

let firstName = "SFT";//Camel case
let user_name = "Hanif";//using underscore
let _age = 21;//start with underscore
let $price = 23.99;//using $ sign

console.log("Name: ", firstName);
console.log("Username: ", user_name);
console.log("Age: ", _age);

console.log("Price: ", $price);
