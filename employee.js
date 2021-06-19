function Employee(name, id, email, critera, position) {

    if (typeof name !== "string" || !name.trim().length) {
        throw new Error(`Name MUST be a non-empty string`);
    }

    if (typeof id !== "number" || isNaN(id)) {
        throw new Error("ID MUST be a number");
    }

    if (typeof email !== "string" || !email.trim().length) {
        throw new Error("Email MUST be a non-empty string");
    }

    if (typeof critera !== "string" || !critera.trim().length) {
        throw new Error("String MUST be a non-empty string");
    }

    if (typeof position !== "string" || !position.trim().length) {
        throw new Error("String MUST be a non-empty string");
    }


    this.name = name;
    this.id = id;
    this.email = email;
    this.critera = critera;
    this.position = position;

}

module.exports = Employee;