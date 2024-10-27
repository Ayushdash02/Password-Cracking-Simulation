const bcrypt = require("bcryptjs");

const targetPassword = "securePass";
const hash = bcrypt.hashSync(targetPassword, 10); // Store hashed password

async function hashCrackingSimulation() {
    const commonPasswords = ["123456", "password", "securePass"];

    for (const password of commonPasswords) {
        if (await bcrypt.compare(password, hash)) {
            console.log("Password found:", password);
            return;
        }
    }
    console.log("Password not found.");
}

hashCrackingSimulation();
