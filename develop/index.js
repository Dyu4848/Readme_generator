// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter title of project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter table of contents',
        name: 'content',
    },
    {
        type: 'input',
        message: 'How did you install?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'what is the usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'what licensing was used for this project?',
        name: 'license',
    },
    {
    type: 'input',
    message: 'who conrtibuted to this project?',
    name: 'contribution',
    },
    {
        type: 'input',
        message: 'is there a test?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Do you have any questions?',
        name: 'question',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then((response) => {
        console.log(response)
        const markDown = generateMarkdown(response)
        writeToFile('genReadme.md', markDown)
    })
}
// Function call to initialize app
init();
