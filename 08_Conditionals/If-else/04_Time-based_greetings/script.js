/*
            JAVASCRIPT TIME-BASED GREETING
           ================================

    Today we'll create intelligent greeting messages
    based on the current time of day

    Enhanced greeting system with 5 time periods:
    - Morning: 5 AM to 11:59 AM
    - Noon: 12 PM to 12:59 PM  
    - Afternoon: 1 PM to 5:59 PM
    - Evening: 6 PM to 8:59 PM
    - Night: 9 PM to 4:59 AM
*/

let hour = new Date().getHours();
let greeting;

if (hour >= 5 && hour < 12) {
    greeting = "🌅 Good morning!";
} else if (hour >= 12 && hour < 13) {
    greeting = "☀️ Good noon!";
} else if (hour >= 13 && hour < 18) {
    greeting = "🌞 Good afternoon!";
} else if (hour >= 18 && hour < 21) {
    greeting = "🌇 Good evening!";
} else {
    greeting = "🌙 Good night!";
}
console.log(`${greeting} Current hour: ${hour}`);