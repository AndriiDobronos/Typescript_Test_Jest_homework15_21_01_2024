import {Administration} from "./Administration";

describe("Administration", () => {
    let administration: Administration   ;

    beforeEach(() => {
        administration = new Administration();
    });

    it("should create an instance of Administration", () => {
        expect(administration).toBeInstanceOf(Administration);
    });

    it("should add employee", () => {
        const employee = {position:"Manager",name:"Bob",salary:1000};
        administration.addEmployee(employee);

        expect(administration.employees).toEqual([{position:"Manager",name:"Bob",salary:1000}]);
    });

    it("should return []", () => {
        const employee = {position:"Manager",name:"Bob",salary:1000};
        administration.addEmployee(employee);
        administration.removeEmployee(employee);

        expect(administration.employees).toEqual([]);
    });

    it("should add animal", () => {
        const animal = "Lion";
        administration.addAnimal(animal);

        expect(administration.getAnimals()).toEqual(["Lion"]);
    });
});