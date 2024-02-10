const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
// const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user:
const questions = [
  {
    type: "input",
    name: "fileName",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "How can users install dependencies?",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide instructions for running tests:",
  },
  {
    type: "input",
    name: "usage",
    message: "How should users use your project?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to your project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
];

const generateREADME = (data) => {
  return `
    # ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} License.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach out to me on GitHub: [${data.github}](https://github.com/${data.github})
or via email: ${data.email}`;
  //   return `
  //     <!DOCTYPE html>
  // <html lang="en">
  // <head>
  //   <meta charset="UTF-8">
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //   <title>Document</title>
  // </head>
  // <body>
  // <header>${header}</header>
  // </body>
  // </html>`;
};

const createMarkdownTemplate = (answers) => {
  return `# ${header}`;
};

// inquirer.prompt(questions).then((answers) => {
//   console.log(answers);
//   const { fileName } = answers;
//   const file = `${fileName}.md`;
//   const fileText = generateREADME(answers);
// });

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateREADME({ ...inquirerResponses }));
  });
}

// function call to initialize program
init();
