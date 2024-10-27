const targetPassword = "password123";
const commonPasswords = ["123456", "password", "qwerty", "password123"];

function dictionaryAttack() {
    for (const password of commonPasswords) {
        console.log("Trying:", password);
        if (password === targetPassword) {
            console.log("Password found:", password);
            return;
        }
    }
    console.log("Password not found in dictionary.");
}

dictionaryAttack();
