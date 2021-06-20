const Employee = require('./Employee');

class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }
}

//* `getSchool()`

//* `getRole()`&mdash;overridden to return `'Intern'`

module.exports = Intern;