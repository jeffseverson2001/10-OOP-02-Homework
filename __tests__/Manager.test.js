const Manager = require("../lib/Manager");


describe("Manager class", () => {
        //  Test for a cases when initializing a new Manager object
        describe("Initialization", () => {
            it("should create an object with officeNumber name if valid arguments", () => {
                const officeNumber = new Manager("50");
    
                //  Verifiy new oject has been created
                expect(officeNumber).toEqual("50");
            });
    
        });
    
    
    });