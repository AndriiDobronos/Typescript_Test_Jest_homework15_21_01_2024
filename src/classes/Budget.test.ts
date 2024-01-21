import {Budget} from "./Budget";

describe("Budget", () => {
    let budget: Budget;

    beforeEach(() => {
        budget = new Budget();
    });

    it("should create an instance of Budget", () => {
        expect(budget).toBeInstanceOf(Budget);
    });

    it("should managed Budget", () => {
        budget.manageBudget();
        expect(budget.getBudgetData()?.[0]).toEqual("Expenses can not be increased");
    });

});