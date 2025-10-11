let marks = prompt("Enter marks (0-100)");
let marksNumber = Number(marks);

switch(true){
    case (marksNumber >= 90 && marksNumber <= 100):
        console.log("🎖️ Grade: A+ - Excellent!");
        break;
    case (marksNumber >= 80 && marksNumber < 90):
        console.log("🏅 Grade: A - Very Good!");
        break;
    case (marksNumber >= 70 && marksNumber < 80):
        console.log("✅ Grade: B - Good!");
        break;
    case (marksNumber >= 60 && marksNumber < 70):
        console.log("📘 Grade: C - Average!");
        break;
    case (marksNumber >= 50 && marksNumber < 60):
        console.log("⚠️ Grade: D - Pass!");
        break;
    case (marksNumber >= 0 && marksNumber < 50):
        console.log("❌ Grade: F - Fail!");
        break;
    default:
        console.log("🚫 Invalid marks! Please enter between 0-100");
        break;
}