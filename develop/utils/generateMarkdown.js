// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Project Title
  ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  ${data.content}
  -Title
  -Description
  -Installation
  -Usage
  -License
  -Contribution
  -Test
  -Question

  ## Installation
  ${data.installation}

  ## Usage
  ${data.license}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Question
  ${data.question}
`;
}

module.exports = generateMarkdown;
