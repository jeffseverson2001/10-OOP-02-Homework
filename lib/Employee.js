function Employee(name, id, email) {

    if (typeof name !== "string" || !name.trim().length) {
        throw new Error(`Name MUST be a non-empty string`);
    }

    if (typeof id !== "number" || isNaN(id)) {
        throw new Error("ID MUST be a number");
    }

    if (typeof email !== "string" || !email.trim().length) {
        throw new Error("Email MUST be a non-empty string");
    }


    this.name = name;
    this.id = id;
    this.email = email;

    //* `name`

    //* `id`

    //* `email`

    //* `getName()`

    //* `getId()`

    //* `getEmail()`

    //* `getRole()`&mdash;returns `'Employee'`

}

module.exports = Employee;