const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

const employees = {
    manager: null,
    engineer: [],
    intern: []
};

console.log(employees);

//  Add input questions.
function createMain()  {
    const questions = [
    {
        type: "list",
        message: "Enter Next Employee?",
        name: "employee",
        choices: [
            "None",
            "Engineer",
            "Intern"
        ]
    }
];
return questions;

};


function createManager() {
    const managerQuestions = [
        {
            type: "input",
            message: "Enter Manager Name",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Manager Email",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Managers Employee ID",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Managers Office Number",
            name: "office"
        }
    ]

    return managerQuestions;
};

function createEngineer() {

};

function createIntern() {

};


//  Add team member to list
function init() {
    if (employees.manager) {
        questions = createMain();
        inquirer.prompt(questions)
            .then((data) => {
                console.log(data);
            });
    } else {
        questions = createManager();
        inquirer.prompt(questions)
            .then((data) => {
                console.log(data);
                new Manager(data.id, data.name, data.email, data.office).getRole();
            });
    };

};

//  Build HTML page


//  Initate team manager info
init();



