// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
    //add const for api if using any


// TODO: Create an array of questions for user input
const questions = [
    //or inquirer.prompt([
   // ])


//project title
{
    type: 'input',
    name: 'title',
    message: 'What is the title of this project? (Required)',
    validate: titleResponse => {
        if (titleResponse){
            return true;
        } else {
            console.log('This project must have a title in order to continue');
            return false;
        }
        }
    },
//description
{
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of the project',
    validate: descriptionResponse => {
        if (descriptionResponse){
        return true;
    } else {
        console.log('Provide a description of your project');
        return false;
    }
    }
},
//Installation 
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
    validate: installationSteps => {
        if (installationSteps){
        return true;
    } else {
        console.log('Provide a step-by-step description of how to install your project');
        return false;
    }
    }
},
//usage
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use',
    validate: usageInstructions => {
        if (usageInstructions){
        return true;
    } else {
        console.log('Provide instructions and directions for use');
        return false;
    }
    }
},
//credits
{
    type: 'input',
    name: 'credits',
    message: 'List any collaborators, third party assets, creators or tutorials and provide links to a respective website or GitHub profile',
    validate: creditsInfo => {
        if (creditsInfo){
        return true;
    } else {
        console.log('List your collaborators, creators or third party assets');
        return false;
    }
    }
},
//features
{
    type: 'input',
    name: 'features',
    message: 'If your project has a lot of features, list them here',
    validate: featuresInput => {
        if (featuresInput){
        return true;
    } else {
        console.log('If no features are present write N/A');
        return false;
    }
    }

},
//contributors
{
    type: 'input',
    name: 'contributions',
    message: 'How can others contribute to this project?',
    validate: contributionInput => {
        if (contributionInput){
        return true;
    } else {
        console.log('Provide information about how to contribute to your project');
        return false;
    }
    }
},
//tests
{
    type: 'input',
    name: 'tests',
    message: 'How do you test your project or application?',
    validate: testResponse => {
        if (testResponse){
        return true;
    } else {
        console.log('Provide at least one test instruction for your project');
        return false;
    }
    }
},
//Licensing
{
    type: 'checkbox',
    name: 'licence',
    message: 'Choose a license type for your project',
    choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        } else {
            console.log('Pick one license type for your project');
            return false;
        }
        }
    },
//Github information
{
    type: 'input',
    name: 'github',
    messae: 'Enter your GitHub username',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username');
            return false;
        }
    }
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
