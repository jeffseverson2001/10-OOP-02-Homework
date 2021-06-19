const Employee = require("../employee");

describe("Employee", () => {
    //  Test for a cases when initializing a new Employee object
    describe("Initialization", () => {
        it("should create an object with name, id, email and github name if valid arguments", () => {
            const employee = new Employee("Test Employee", 1000, "testemployee@email.com", "testemployee", "engineer");

            //  Verifiy new oject has been created
            expect(employee.name).toEqual("Test Employee");
            expect(employee.id).toEqual(1000);
            expect(employee.email).toEqual("testemployee@email.com");
            expect(employee.critera).toEqual("testemployee");
            expect(employee.position).toEqual("engineer");

        });

        it("should throw error if no valid arguments", () => {
            const ep = () => new Employee();

            expect(ep).toThrow();
        });

        if("", () => {
        
    });
    });


});