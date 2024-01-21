import {Employees} from "./Employees";

describe("Employees", () => {
    let employees: Employees;

    beforeEach(() => {
        employees = new Employees();
    });

    it("should create an instance of Employees", () => {
        expect(employees).toBeInstanceOf(Employees);
    });

    it("should added employee", () => {
        employees.addEmployeeData({
            position:"Manager",
            name:"Bob",
            salary:1000
        });
        expect(employees.employeeData?.[0]).toEqual({
            position:"Manager",
            name:"Bob",
            salary:1000
        });
    });

    it("should added employee", () => {
        employees.addEmployeeData({
            position:"Manager",
            name:"Bob",
            salary:1000
        });
        employees.removeEmployeeData("Bob");
        expect(employees.employeeData?.[0]).toBeUndefined();
    });
});