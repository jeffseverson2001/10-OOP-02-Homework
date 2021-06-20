const Employee = require('./Employee');

class Manager extends Employee {

    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
}

//* `getRole()`&mdash;overridden to return `'Manager'`

module.exports = Manager;