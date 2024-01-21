import {Revenue} from "./Revenue";

describe("Revenue", () => {
    let revenue: Revenue;

    beforeEach(() => {
        revenue = new Revenue();
    });

    it("should create an instance of Revenue", () => {
        expect(revenue).toBeInstanceOf(Revenue);
    });

    it("should added employee", () => {
        revenue.addRevenue(100);
        revenue.addRevenue(200);
        expect(revenue.getDailyRevenue()).toEqual(300);
    });

});