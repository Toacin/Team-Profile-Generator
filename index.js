const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./lib/generateHTML");

managerQuestions = [
    {
        message: "What's the team manager's name?",
        name: "managerName"
    },
    {
        message: "What's the team manager's Employee ID?",
        name: "managerID"
    },
    {
        message: "What's the team manager's email address?",
        name: "managerEmail"
    },
    {
        message: "What's the team manager's office number?",
        name: "managerOfficeNumber"
    },
    {
        type: "list",
        message: "What role would would you like to add to your team?",
        name: "nextRole",
        choices: ["Engineer", "Intern", "None, I'd like to generate webpage now."] 
    }
];

engineerQuestions = [
    {
        message: "What's the team engineer's name?",
        name: "engineerName"
    },
    {
        message: "What's the team engineer's Employee ID?",
        name: "engineerID"
    },
    {
        message: "What's the team engineer's email address?",
        name: "engineerEmail"
    },
    {
        message: "What's the team engineer's GitHub username?",
        name: "engineerGitHub"
    },
    {
        type: "list",
        message: "What role would would you like to add to your team?",
        name: "nextRole",
        choices: ["Engineer", "Intern", "None, I'd like to generate webpage now."] 
    }
];

internQuestions = [
    {
        message: "What's the team intern's name?",
        name: "internName"
    },
    {
        message: "What's the team intern's Employee ID?",
        name: "internID"
    },
    {
        message: "What's the team intern's email address?",
        name: "internEmail"
    },
    {
        message: "What's the team intern's school?",
        name: "internSchool"
    },
    {
        type: "list",
        message: "What role would would you like to add to your team?",
        name: "nextRole",
        choices: ["Engineer", "Intern", "None, I'd like to generate webpage now."] 
    }
];

const membersObjArray = [];
let sortedMembersObjArray = [];



function init() {
    inquirer.prompt(managerQuestions)
    .then((answers) => {
        let newManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
        membersObjArray.push(newManager);
        checkNextRole(answers);
    })
};

function engineerPrompt() {
    inquirer.prompt(engineerQuestions)
    .then((answers) => {
        let newEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
        membersObjArray.push(newEngineer);
        checkNextRole(answers);
    })
};

function internPrompt() {
    inquirer.prompt(internQuestions)
    .then((answers) => {
        let newIntern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        membersObjArray.push(newIntern);
        checkNextRole(answers);
    })
};

function checkNextRole(answers) {
    if (answers.nextRole === "Engineer") engineerPrompt();
    else if (answers.nextRole === "Intern") internPrompt();
    else {
        fs.writeFile("./dist/index.html", generateHTML(sortMembers(membersObjArray)), (err) => err ? console.log("failed") : console.log("success"));
    };
};

function sortMembers(data) {
    const engineers = [];
    const manager = [];
    const intern = [];
    data.forEach((element) => {
        switch (element.getRole()) {
            case "Manager": manager.push(element);
                break;
            case "Engineer": engineers.push(element);
                break;
            case "Intern": intern.push(element);
                break;
        }
    })
    return [...manager, ...engineers, ...intern];
};

init();