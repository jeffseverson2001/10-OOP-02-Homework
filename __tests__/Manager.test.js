const Manager = require("../lib/Manager");


describe("Manager class", () => {
        //  Test for a cases when initializing a new Manager object
        describe("Initialization", () => {
            it("should create an object with officeNumber name if valid arguments", () => {
                const manager = new Manager(1000, "Test Employee", "testemployee@email.com", "50");
    
                //  Verifiy new oject has been created
                expect(manager.officeNumber).toEqual("50");
            });
    
        });
    
    
    });