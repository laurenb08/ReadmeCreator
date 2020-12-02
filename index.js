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
        message: "What is the link to your GitHub Repo?",
        name: "gitHubRepo",
    }, {
        type: "input",
        message: "What is your email?",
        name: "email",
    }])
    .then(response => {
        console.log(response.projectName);
        console.log(response.description);
        console.log(response.installation);
        console.log(response.usage);
        console.log(response.tests);
        console.log(response.contributions);
        console.log(response.license);
        console.log(response.email);
        console.log(response.gitHubRepo);

        let page = `# **${response.projectName}**

## **Table of Contents**

- [**Description**](#description)
- [**Installation Instructions**](#installation-instructions)
- [**Usage**](#usage)
- [**Tests**](#tests)
- [**Contributions**](#contributions)
- [**Licences**](#licences)
- [**Questions**](#questions)

## **Description**

${response.description}

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

## **Questions**

Please contact <${response.email}> if you have any questions or [View the updated site by cliking here](${response.gitHubRepo}).`

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