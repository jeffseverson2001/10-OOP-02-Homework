const Employee = require('./Employee');

class Manager extends Employee {

    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        return role = "Manager";
    }

}

//* `getRole()`&mdash;overridden to return `'Manager'`


module.exports = Manager;