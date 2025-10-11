let hour = new Date().getHours();
let greeting;

switch(true){
    case (hour >=5 && hour <12):
        greeting = "🌅 Good morning!";
        break;
    case (hour >= 12 && hour <13):
        greeting = "☀️ Good noon!";
        break;
    case (hour >=13 && hour < 18):
        greeting = "🌞 Good afternoon!";
        break;
    case (hour >= 18 && hour < 21):
        greeting = "🌇 Good evening!";
        break;
    default:
        greeting = "🌙 Good night!";
        break;
}
console.log(`${greeting} current hour: ${hour}`);