// const path = require("path");
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
];

const generateREADME = (answers) => {
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

inquirer.prompt(questions).then((answers) => {
  const { fileName } = answers;
  const file = `${fileName}.md`;
  const fileText = generateREADME(answers);
});

// mini project - Aarons version
promptUser()
  .then((answers) => fs.writeFileAsync(generateREADME(answers)))
  .then(() => console.log("Successfulley generated README"))
  .catch((err) => console.error(err));

// another version:
// promptUser()
//   .then((answers) => {
//     const readmeContent = generateREADME(answers);
//     fs.writeFileSync("README.md", readmeContent);
//     console.log("README generated successfully!");
//   })
//   .catch((error) => {
//     console.error("Error occurred:", error);
//   });

//   switch (fileType) {
//     case "html":
//       fileText = createHtmlTemplate(answers);
//       break;
//     case "md":
//       fileText = createMarkdownTemplate(answers);
//       break;

//     default:
//       fileText = "Oops, this file type isn't implemented yet";
//       break;
//   }

//   // function to write README file
//   fs.writeFile(file, fileText, (err) =>
//     err ? console.log("Error") : console.log("Success!")
//   );
// });

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error("err") : console.log("README generated successfully!");
  });
}

// // function to write README file
// function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
