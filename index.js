const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");


//  Add input questions.
let questions = [
    {
        type: "input",
        message: "Enter Employee Name",
        name: ""
    },
    {
        type: "input",
        message: "Enter Employee Email",
        name: ""
    },
    {
        type: "input",
        message: "",
        name: ""
    }
];


//  Add team member to list
function init(role) {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        //writeToFile("./output/README.md", data)
    })
}

//  Build HTML page


//  Initate team manager info
init("manager");



