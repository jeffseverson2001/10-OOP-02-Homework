const Employee = require("../lib/employee");

describe("Employee", () => {
    //  Test for a cases when initializing a new Employee object
    describe("Initialization", () => {
        it("should create an object with name, id, email and github name if valid arguments", () => {
            const employee = new Employee("Test Employee", 1000, "testemployee@email.com");

            //  Verifiy new oject has been created
            expect(employee.name).toEqual("Test Employee");
            expect(employee.id).toEqual(1000);
            expect(employee.email).toEqual("testemployee@email.com");
        });

        //  Fail if all arguments are empty
        it("should throw error if no valid arguments", () => {
            const ep = () => new Employee();
            expect(ep).toThrow();
        });

        //  Error if name is empty
        it("should throw error if no name", () => {
            const ep = () => new Employee("", 1000, "testemployee@email.com");
            const err = new Error("Name MUST be a non-empty string");
            expect(ep).toThrowError(err);
        });

        //  Error if id is empty or not a number
        it("should throw error if no id", () => {
            const ep = () => new Employee("Test Employee", '', "testemployee@email.com");
            const err = new Error("ID MUST be a number");
            expect(ep).toThrowError(err);
        });

        //  Error if email is empty
        it("should throw error if no email", () => {
            const ep = () => new Employee("Test Employee", 1000, "");
            const err = new Error("Email MUST be a non-empty string");
            expect(ep).toThrowError(err);
        });

    });


});