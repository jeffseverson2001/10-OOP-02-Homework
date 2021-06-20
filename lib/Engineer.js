const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(github) {
    this.github = github;
  }
}


//* `getGithub()`

//* `getRole()`&mdash;overridden to return `'Engineer'`

module.exports = Engineer;

