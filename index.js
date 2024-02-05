// const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
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
  const { fileName, fileType, title } = data;

  const file = `${fileName}.${fileType}`;
  console.log(file);
  console.log(title);
});

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
