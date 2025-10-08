/* 
  SQUARE AREA:
  Formula: side × side
*/
let squareSide = parseFloat(prompt("Enter side for square: "));
console.log("Area of square = ", squareSide * squareSide);


/*
 RECTANGLE AREA  
 Formula: length × width
*/
let rectLength = parseFloat(prompt("Enter length for rectangle: "));
let rectWidth = parseFloat(prompt("Enter width for rectangle: "));
console.log("Area of rectangle = ", rectLength * rectWidth);


/*
  TRIANGLE AREA
  Formula: ½ × base × height
*/
let triBase = parseFloat(prompt("Enter base for triangle: "));
let triHeight = parseFloat(prompt("Enter height for triangle: "));
console.log("Area of triangle = ", 0.5 * triBase * triHeight);


/*
 TRAPEZIUM AREA
 Formula: ½ × (base1 + base2) × height
*/
let trapBase1 = parseFloat(prompt("Enter first base for trapezium: "));
let trapBase2 = parseFloat(prompt("Enter second base for trapezium: "));
let trapHeight = parseFloat(prompt("Enter height for trapezium: "));
console.log("Area of trapezium = ", 0.5 * (trapBase1 + trapBase2) * trapHeight);


/*
 PARALLELOGRAM AREA
 Formula: base × height
*/
let paraBase = parseFloat(prompt("Enter base for parallelogram: "));
let paraHeight = parseFloat(prompt("Enter height for parallelogram: "));
console.log("Area of parallelogram = ", paraBase * paraHeight);


