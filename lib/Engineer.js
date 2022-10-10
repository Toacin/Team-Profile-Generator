const Employee = require("./Employee");

function Engineer(name, id, email, github) {
    Employee.call(this, name, id, email);
    this.github = github;
}

Engineer.prototype.getRole = function() {
    return this.constructor.name;
}

Engineer.prototype.getGithub = function() {
    return this.github;
}

module.exports = Engineer;