let letter = prompt("Enter a letter: ").toLowerCase();
switch(letter){
    case 'a':
        console.log("A is a VOWEL");
        break;
    case 'e':
        console.log("E is a VOWEL");
        break;
    case 'i':
        console.log("I is a VOWEL");
        break;
    case 'o':
        console.log("O is a VOWEL");
        break;
    case 'u':
        console.log("U is a VOWEL");
        break;

    default:
        if (letter >= 'a' && letter <= 'z') {
            console.log("" + letter.toUpperCase() + " is a CONSONANT");
        } else {
            console.log("❌ Please enter a valid letter from A-Z");
        }
        break;
}

