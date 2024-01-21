import {Accounting} from "./Accounting";

describe("Accounting", () => {
    let accounting: Accounting  ;

    beforeEach(() => {
        accounting = new Accounting();
    });

    it("should create an instance of Accounting", () => {
        expect(accounting).toBeInstanceOf(Accounting);
    });

    it("should return undefined", () => {
        expect(accounting.generateFinancialReports()).toBeUndefined();
    });

    it("should be equal to 4", () => {
        accounting.setFinancialDatas([{revenue:10,payment:6,balance:4}]);
        expect(accounting.generateFinancialReports()).toEqual(4);
    });
});