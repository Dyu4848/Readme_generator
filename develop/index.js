// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'enter main title',
    name: 'title',
},
{
    type: 'input',
    message: 'enter title text',
    name: 'text',
},
{
    type: 'input',
    message: 'enter use story',
    name: 'story'
},
{
    type: 'input',
    message: 'enter accceptance criteria',
    name: 'acceptance',
},
{
    type: 'input',
    message: 'enter helpful guidelines',
    name: 'started',
},
{
    type: 'input',
    message: 'enter the grading requirements',
    name: 'grading',
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then((response) => {
        console.log(response)
    })
}
// Function call to initialize app
init();
