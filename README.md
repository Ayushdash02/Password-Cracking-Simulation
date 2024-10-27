# Password Cracking Simulation

## Project Overview

The Password Cracking Simulation is a JavaScript-based application that showcases different techniques used for cracking passwords, including brute-force and dictionary attacks. This project is designed for educational purposes to illustrate the vulnerabilities of weak passwords.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Brute-Force Attack**: Attempts all possible combinations of characters.
- **Dictionary Attack**: Uses a list of common passwords to find matches.
- **Hash Cracking**: Attempts to crack hashed passwords by comparing generated hashes to the target hash, supporting hash functions like MD5, SHA-1, and SHA-256.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (includes npm)
- [Visual Studio Code](https://code.visualstudio.com/)

## Installation

 **Clone the Repository**
1. Open your terminal and run the following command to clone the repository:

   ```bash
   git clone <repository-url>

2. Navigate to the Project Directory Change to the directory of the cloned repository:

    ```bash
    cd Password-Cracking-Simulation

3. Open the Project in Visual Studio Code Launch Visual Studio Code with the project:

    ```bash
    code .

4. Install Required Packages If you have a package.json file, install the dependencies using:

    ```bash
    npm install

##  Usage

1. Run the Simulation To start the password cracking simulation, execute the following command in your terminal:

    ```bash
    node main.js

2. Choose the Cracking Method The application will prompt you to select a method (brute-force or dictionary attack). Follow the on-screen instructions.

3. Provide Input Data Based on your selected method:

    - For Brute-Force, specify parameters like password length and character set.
    - For Dictionary Attack, either input a custom dictionary file path or use the default passwords.txt.

4. View the Results After execution, results will be displayed in the terminal, indicating whether the password was successfully cracked and the time taken.

## Code Structure

**All necessary code files are included in this repository:**
- `main.js`: Entry point for the application.
- `bruteForce.js`: Contains the brute-force attack implementation.
- `dictionaryAttack.js`: Contains the dictionary attack implementation.
- `hashCrack.js`: Implements hash-cracking functionality, including support for MD5, SHA-1, and SHA-256 hash algorithms.
- `passwords.txt`: A sample list of passwords for use in dictionary and hash-cracking attacks.

## Contributing
    Contributions are encouraged! If you have suggestions or improvements, please fork the repository and submit a pull request.

## License
    This project is licensed under the MIT License. Refer to the LICENSE file for details.

## Acknowledgments
    Thank you to the open-source community and various resources that have supported the development of this project. Special thanks to educational content that has provided insights into password security and cracking techniques.

    
### Instructions

1. **Replace `<repository-url>`** with the actual URL of your GitHub repository.
2. **Ensure the code structure matches your files** in the repository.
3. **Save this as `README.md`** in your project directory.

This README file should provide a clear understanding of the project and how to run it! Feel free to make any further adjustments as needed.
