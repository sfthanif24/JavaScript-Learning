/*
             SWITCH STATEMENT
            =================

    Selects one of many code blocks to execute
    Useful when you have multiple discrete values to check
*/


let day = "Monday";

switch (day) {
    case "Monday":
        console.log("📅 Start of the work week!");
        break;
    case "Tuesday":
        console.log("📝 Productive day ahead!");
        break;
    case "Wednesday":
        console.log("🌟 Midweek - almost there!");
        break;
    case "Thursday":
        console.log("🚀 Weekend is coming!");
        break;
    case "Friday":
        console.log("🎉 Friday! Weekend starts soon!");
        break;
    case "Saturday":
        console.log("😴 Weekend! Time to relax!");
        break;
    case "Sunday":
        console.log("🌞 Sunday! Prepare for the week!");
        break;
    default:
        console.log("❌ Invalid day!");
}