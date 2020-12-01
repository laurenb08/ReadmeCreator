const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([{
        type: "input",
        message: "What is the name of your project?",
        name: "projectName",
    }, {
        type: "input",
        message: "Please write a description of your project:",
        name: "description",
    }, {
        type: "input",
        message: "Please enter a Table of Contents",
        name: "tableOfContents",
    }, {
        type: "input",
        message: "Please give instructions for installation:",
        name: "installation",
    }, {
        type: "input",
        message: "Please give examples of usage for your project:",
        name: "usage",
    }, {
        type: "input",
        message: "What tests did you run to make sure this is working properly?",
        name: "tests",
    }, {
        type: "input",
        message: "Please say if you are open to contributions and give requirements for acceptance criteria:",
        name: "contributions",
    }, {
        type: "input",
        message: "Please list any licences for open source that you used:",
        name: "license",
    }, {
        type: "input",
        message: "Who can the user contact if they have questions?",
        name: "questions",
    }])
    .then(response => {
        console.log(response.projectName);
        console.log(response.description);
        console.log(response.tableOfContents);
        console.log(response.installation);
        console.log(response.usage);
        console.log(response.tests);
        console.log(response.contributions);
        console.log(response.license);
        console.log(response.questions);

        let page = `# **${response.projectName}**

## **Description**

${response.description}

## **Table of Contents**

${response.tableOfContents}

## **Installation Instructions**

${response.installation}

## **Usage**

${response.usage}

## **Tests**

${response.tests}

## **Contributions**

${response.contributions}

## **Licences**

${response.license}

## **Contributions**

Please contact ${response.questions} if you have any questions.`

        fs.writeFile("readme.md", page, (err) => {
            if (err) console.log("failed to write file");
            else console.log("Wrote file");
        })
    });


// array of questions for user
// const questions = [

// ];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();