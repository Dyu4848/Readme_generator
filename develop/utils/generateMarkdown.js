// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === 'Apache') {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else
    return '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else
    return '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache') {
    return `"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.`
  } else if (license === 'MIT') {
    return (`Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),`)
  } else
    return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title
  ${data.title} ${renderLicenseBadge(data.license)}
  
  # Description
  ${data.description}

  ## Table of Contents
  ${data.content}
  - [Title](#title)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Question](#question)

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  # Contribution
  ${data.contribution}

  # Test
  ${data.test}

  # Question
  ${data.question}
`;
}

module.exports = generateMarkdown;
