/*
            JAVASCRIPT GRADE CHECK PROGRAM
           ================================

    Today we'll create a comprehensive grade checking system
    that assigns grades based on marks using if-else conditions

    Grade Scale:
    A+ : 90 and above
    A  : 80 to 89 
    B  : 70 to 79  
    C  : 60 to 69
    D  : 50 to 59
    F  : Below 50
*/

let marks = prompt("Enter your marks (0-100): ");

if (marks >= 90) {
    console.log("🎖️ Grade: A+ - Excellent!");
} else if (marks >= 80) {
    console.log("🏅 Grade: A - Very Good!");
} else if (marks >= 70) {
    console.log("✅ Grade: B - Good!");
} else if (marks >= 60) {
    console.log("📘 Grade: C - Average!");
} else if (marks >= 50) {
    console.log("⚠️ Grade: D - Pass!");
} else {
    console.log("❌ Grade: F - Fail!");
}