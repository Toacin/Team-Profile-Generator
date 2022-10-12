// imported all necessary modules and functions
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./lib/generateHTML");

// initializing all arrays used for inquirer prompts
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

// All user inputted members are stored here as objects (constructed via constructor functions)
const membersObjArray = [];

// Initial set of questions for manager on application start up
function init() {
    inquirer.prompt(managerQuestions)
    .then((answers) => {
        // create a Manager Object based on answers inputted and push into members array
        let newManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
        membersObjArray.push(newManager);
        // check what they answered for last question (Engineer, Intern, or complete)
        checkNextRole(answers);
    })
};

// If called on, inquirer prompt on engineer questions
function engineerPrompt() {
    inquirer.prompt(engineerQuestions)
    .then((answers) => {
        let newEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
        membersObjArray.push(newEngineer);
        // check what they answered for last question (Engineer, Intern, or complete)
        checkNextRole(answers);
    })
};

// If called on, inquirer prompt on intern questions
function internPrompt() {
    inquirer.prompt(internQuestions)
    .then((answers) => {
        let newIntern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        membersObjArray.push(newIntern);
        // check what they answered for last question (Engineer, Intern, or complete)
        checkNextRole(answers);
    })
};

function checkNextRole(answers) {
    // if answer to last question of any set of questions is eng, intern, or done, run appropriate function to either reprompt, or generate HTML
    if (answers.nextRole === "Engineer") engineerPrompt();
    else if (answers.nextRole === "Intern") internPrompt();
    else {
        fs.writeFile("./dist/index.html", generateHTML(sortMembers(membersObjArray)), (err) => err ? console.log("failed") : console.log("success"));
    };
};

// instead of sending data to generateHTML in order of members created, sort first using this function so managers are generated first, then engineers, and interns last
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

// start application by asking for manager first
init();