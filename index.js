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

const createHtmlTemplate = (header) => {
  const htmlTemplate = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
</html>`;

  return htmlTemplate;
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

  fs.writeFile(file, fileText, (err) =>
    err ? console.log("oops,, there's an err") : console.log("it worked!")
  );
});

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
