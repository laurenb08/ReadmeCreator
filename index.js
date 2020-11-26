const inquirer = require("inquirer");
const fs = require("fs");

const questions = [{
    type: "input",
    message: "What is the name of your project?",
    name: "projectName",
}, {
    type: "input",
    message: "Please write a description of your project:",
    name: "description",
}, {
    type: "input",
    message: "Do you have links to any visuals?",
    name: "visuals",
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
    message: "Where can people go for support?",
    name: "support",
}, {
    type: "input",
    message: "What ideas do you have for future releases?",
    name: "roadmap",
}, {
    type: "input",
    message: "Please say if you are open to contributions and give requirements for acceptance criteria:",
    name: "contributions",
}, {
    type: "input",
    message: "Please list any licences for open source that you used:",
    name: "license",
}]
    .then(response => {
        console.log(response.projectName);
        console.log(response.description);
        console.log(response.visuals);
        console.log(response.installation);
        console.log(response.usage);
        console.log(response.support);
        console.log(response.roadmap);
        console.log(response.contributions);
        console.log(response.license);

        fs.writeFile("readme.md", JSON.stringify(response), (err) => {
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
function init() {

}

// function call to initialize program
init();