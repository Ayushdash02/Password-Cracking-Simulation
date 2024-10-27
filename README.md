# Password Cracking Simulation

This project demonstrates different password-cracking techniques in a controlled, educational environment. The simulation covers:
1. **Brute Force Attack**: Attempts all possible combinations of characters to find a target password.
2. **Dictionary Attack**: Uses a list of commonly used passwords to guess a target password.
3. **Hash Cracking**: Simulates password cracking by comparing hashes of common passwords.

## Project Structure

PasswordCrackingSimulation/
│
├── bruteForceAttack/
│   └── bruteForce.js          # Code for Brute Force Attack simulation
│
├── dictionaryAttack/
│   └── dictionaryAttack.js    # Code for Dictionary Attack simulation
│
├── hashCracking/
│   └── hashCracking.js        # Code for Hash Cracking simulation
│
└── package.json               # Node.js configuration file (for dependencies)


## Setup Instructions

1. **Clone the Repository** (or create your project folder structure as shown).
2. **Install Dependencies**:
   - Navigate to the project folder and run:
   ```bash
   npm install bcryptjs

This installs bcryptjs, used in the Hash Cracking simulation.

Run Each Simulation:
Go into each attack folder (e.g., bruteForceAttack, dictionaryAttack, hashCracking) and run the respective .js file using Node.js.
Attack Simulations
1. Brute Force Attack
This script attempts every possible combination of lowercase letters until it finds the correct password.

Run the Simulation:
    cd bruteForceAttack
    node bruteForce.js

Expected Output: The program will display each attempt and print a message when it finds the target password.

2. Dictionary Attack
This script uses a predefined list of common passwords to attempt a match with the target password.

Run the Simulation:
    cd dictionaryAttack
    node dictionaryAttack.js

Expected Output: The program checks each password from the dictionary and displays a message when it finds the target password.

3. Hash Cracking with bcryptjs
This simulation hashes a target password and attempts to crack it by comparing hashed versions of common passwords.

Run the Simulation:
    cd hashCracking
    node hashCracking.js 

Expected Output: The program hashes each password in the dictionary and attempts to match it to the target hash. If a match is found, it displays the original password.

Project Insights
Brute Force Limitations: Brute force is exhaustive and slow for long passwords, but effective against short, weak passwords.
Dictionary Attack Limitations: Limited by the dictionary’s size, so uncommon passwords remain secure.
Hash Cracking: Demonstrates the importance of strong, unique hashes and secure password storage techniques.
Security Recommendations
Use Strong Passwords: Avoid short or common passwords.
Employ Multi-Factor Authentication: Adds another layer of protection.
Store Passwords Securely: Use salt and hash for storing passwords instead of storing them in plain text.

Disclaimer
This project is strictly for educational purposes and aims to raise awareness about password security and common vulnerabilities. Unauthorized use of these techniques against any system without permission is illegal and unethical.