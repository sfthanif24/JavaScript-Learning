let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));

if(isNaN(num1) || isNaN(num2)){
    console.log("Error: Please enter valid numbers!");
}else{
    console.log(`Addition: ${num1} + ${num2} = ${(num1 + num2)}`);
    console.log(`Subtraction: ${num1} - ${num2} = ${(num1 - num2)}`);
    console.log(`Multiplication: ${num1} * ${num2} = ${(num1 * num2)}`);

    if(num2 !== 0){
        console.log(`Division: ${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);
        console.log(`Modulus: ${num1} % ${num2} = ${(num1 % num2)}`);
    }else{
        console.log("Division: Cannot divide by zero!");
        console.log("Modulus: Cannot calculate modulus with zero!");
    }

    console.log(`Exponentiation: ${num1} ** ${num2} = ${(num1 ** num2)}`);
}