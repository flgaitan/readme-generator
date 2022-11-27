// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ''
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {}
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}

    ##License
    ${renderLicenseBadge(data.license)}

    ##Description
    ${data.description}

    ##Table of Contents (Optional)
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Testing](#testing)
    - [Reachout Information](#reachout-info)
  
    ##Installation
    ${data.installation}
  
  
    ##Usage
    ${data.usage}
  
    ##Credits
    ${data.credits}
  
  
    ##Features
    ${data.features}
  
    ##Contributions
    ${data.contributions}
  
  
    ##Tests
    ${data.tests}

    
    ##Reachout-Information
    - GitHub: [${data.github}](https://github.com/${data.github})
    - Email: ${data.email}

  `;
  }
  
  module.exports = generateMarkdown;