// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
   


// TODO: Create an array of questions for user input
const questions = [
    

//project title
{
    type: 'input',
    name: 'title',
    message: 'What is the title of this project? (Required)',
    
    },
//description
{
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of the project',
    
},
//Installation 
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
    
},
//usage
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use',
    
},
//credits
{
    type: 'input',
    name: 'credits',
    message: 'List any collaborators, third party assets, creators or tutorials and provide links to a respective website or GitHub profile',
    
},
//features
{
    type: 'input',
    name: 'features',
    message: 'If your project has a lot of features, list them here',
    

},
//contributors
{
    type: 'input',
    name: 'contributions',
    message: 'How can others contribute to this project?',
   
},
//tests
{
    type: 'input',
    name: 'tests',
    message: 'How do you test your project or application?',
  
},
//Licensing
{
    type: 'checkbox',
    name: 'licence',
    message: 'Choose a license type for your project',
    choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
   
    },
//Github information
{
    type: 'input',
    name: 'github',
    messae: 'Enter your GitHub username',
    
},
//Email
{
    type: 'input',
    name: 'email',
    message: 'Would you like to include an email address? (optional)'
  
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (responses){
        console.log('creating readme...')
        writeToFile("README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
