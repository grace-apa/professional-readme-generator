// const path = require('path');
const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "fileName",
    message: "What is the name of your file?",
  },
  {
    type: "list",
    name: "fileType",
    message: "Choose your preferred file extension?",
    choices: ["md", "txt", "html"],
  },
  {
    type: "input",
    name: "title",
    message: "Please type a title",
  },
];

inquirer.prompt(questions).then((data) => {
  const { fileName, fileType, header } = data;
  const file = `${fileName}.${fileType}`;

  switch (fileType) {
    case "html":
      createHtmlTemplate(header);
      break;
    case "md":
      createMarkdownTemplate(header);
      break;

    default:
      break;
  }

  fs.writeFile(file, header, (err) =>
    err ? console.log("oops,, there's an err") : console.log("it worked!")
  );
});

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
