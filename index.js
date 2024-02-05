const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "fileName",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a brief description of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "How can users install your project?",
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
      name: "tests",
      message: "Please provide instructions for running tests:",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    // {
    //   type: "list",
    //   name: "fileType",
    //   message: "Choose your preferred file extension?",
    //   choices: ["md", "txt", "html"],
    // },
    // {
    //   type: "input",
    //   name: "title",
    //   message: "Please type a title",
    // },
  ]);

const generateREADME = (header) => {
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

const createMarkdownTemplate = (header) => {
  return `# ${header}`;
};

inquirer.prompt(questions).then((data) => {
  const { fileName, fileType, header } = data;
  const file = `${fileName}.${fileType}`;
  let fileText;

  switch (fileType) {
    case "html":
      fileText = createHtmlTemplate(header);
      break;
    case "md":
      fileText = createMarkdownTemplate(header);
      break;

    default:
      fileText = "Oops, this file type isn't implemented yet";
      break;
  }

//   // function to write README file
//   fs.writeFile(file, fileText, (err) =>
//     err ? console.log("Error") : console.log("Success!")
//   );
// });

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README generated successfully!")
  );
}

// // function to write README file
// function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
