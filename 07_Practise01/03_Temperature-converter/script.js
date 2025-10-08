// CELSIUS TO FAHRENHEIT
// Formula: (C × 9/5) + 32
let celsius = parseFloat(prompt("Enter temperature in Celsius: "));
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C = " + fahrenheit + "°F");


// FAHRENHEIT TO CELSIUS  
// Formula: (F - 32) × 5/9
let fahr = parseFloat(prompt("Enter temperature in Fahrenheit: "));
let cel = (fahr - 32) * 5/9;
console.log(fahr + "°F = " + cel + "°C");


// CELSIUS TO KELVIN
// Formula: C + 273.15
let celsius2 = parseFloat(prompt("Enter temperature in Celsius for Kelvin: "));
let kelvin = celsius2 + 273.15;
console.log(celsius2 + "°C = " + kelvin + "K");


// KELVIN TO CELSIUS
// Formula: K - 273.15
let kelvin2 = parseFloat(prompt("Enter temperature in Kelvin: "));
let celsius3 = kelvin2 - 273.15;
console.log(kelvin2 + "K = " + celsius3 + "°C");


// FAHRENHEIT TO KELVIN
// Formula: (F - 32) × 5/9 + 273.15
let fahr2 = parseFloat(prompt("Enter temperature in Fahrenheit for Kelvin: "));
let kelvin3 = (fahr2 - 32) * 5/9 + 273.15;
console.log(fahr2 + "°F = " + kelvin3 + "K");


// KELVIN TO FAHRENHEIT
// Formula: (K - 273.15) × 9/5 + 32
let kelvin4 = parseFloat(prompt("Enter temperature in Kelvin for Fahrenheit: "));
let fahrenheit2 = (kelvin4 - 273.15) * 9/5 + 32;
console.log(kelvin4 + "K = " + fahrenheit2 + "°F");