const targetPassword = "abc"; // Example weak password

function bruteForceAttack() {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let attempt = "";

    for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < chars.length; j++) {
            for (let k = 0; k < chars.length; k++) {
                attempt = chars[i] + chars[j] + chars[k];
                console.log("Trying:", attempt);
                if (attempt === targetPassword) {
                    console.log("Password found:", attempt);
                    return;
                }
            }
        }
    }
    console.log("Password not found.");
}

bruteForceAttack();
