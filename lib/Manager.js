const Employee = require("./Employee");

function Manager(name, id, email, officeNumber) {
    Employee.call(this, name, id, email);
    this.officeNumber = officeNumber;
}

Manager.prototype.getRole = function() {
    return this.constructor.name;
}

Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
}

module.exports = Manager;