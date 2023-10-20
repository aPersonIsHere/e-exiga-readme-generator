// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Input the project title: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Input the project description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Input the project installation instructions: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Input the project usage information: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Input the product contribution guidelines: ',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Provide credits for this project: ',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'Input the project test instructions: ',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Choose a license for your project: ',
        name: 'license',
        choices: [
          'MIT',
          'GPLv2',
          'Apache',
          'GPLv3',
          'BSD 3-clause'
        ]
    },
    {
        type: 'input',
        message: 'Input your GitHub username: ',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Input your email address: ',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(error) : console.log('Success. Writen to file!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
    .then((responses) => {
        console.log(responses);
        var creditBanner = '';
        switch(responses.license) {
            case 'MIT':
                creditBanner = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
            case 'GPLv2':
                creditBanner = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
                break;
            case 'Apache':
                creditBanner = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
            case 'GPLv3':
                creditBanner = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                break;
            case 'BSD 3-clause':
                creditBanner = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                break;
            default:    
                creditBanner = "";
        }
        readmeText = `
# ${responses.title}
${creditBanner}

## Description
        
${responses.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribution Guidelines](#contribution-guidelines)
- [Tests](#tests)
- [Questions](#questions-and-contact)
        
## Installation
        
${responses.installation}
        
## Usage
        
${responses.usage}
        
## Credits

${responses.credits}

## License
        
This project follows the ${responses.license} license. Please refer to the LICENSE file in the main repository for more information concerning this license.
        
## Features

${responses.features}

## Contribution Guidelines

${responses.contribution}

## Tests

${responses.test}

## Questions and Contact

### My GitHub: [${responses.github}](https://www.github.com/${responses.github})

### My Email: ${responses.email}

Feel free to reach out through email by highlighting my email address and copy-and-paste it to your recipient. 
Feel free to ask further questions, provide suggestions, or to send a thank you note!

        `;
        writeToFile('READMECOPY.md', readmeText);
    })
}

// Function call to initialize app
init();
