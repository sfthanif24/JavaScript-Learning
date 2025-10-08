/*
            PERSONAL BUDGET TRACKER APP
           =============================
*/

let userName = "sft Hanif";
let income = 5000;

let rent = 580;
let food = 600;
let transport = 200;
let utilities = 150;
let entertainment = 300;

let totalExpenses = rent + food + transport + utilities + entertainment;
let tax = income * 0.10;
let netIncome =  income - tax;
let balance = netIncome - totalExpenses;
let savings = balance * .20; 

console.log('👤 User: ' + userName);
console.log('💰 Total Income: $' + income);
console.log('💸 Total Expenses: $' + totalExpenses);
console.log('🏛️ Tax Deducted (10%): $' + tax);
console.log('💳 Net Income After Tax: $' + netIncome);
console.log('⚖️ Remaining Balance: $' + balance + ' (in 2024)');
console.log('🏦 Savings (20% of balance): $' + savings);