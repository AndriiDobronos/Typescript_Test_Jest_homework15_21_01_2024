import {CurrentVisitors} from "./CurrentVisitors";

describe("CurrentVisitors", () => {
    let currentVisitors: CurrentVisitors;

    beforeEach(() => {
        currentVisitors = new CurrentVisitors();
    });

    it("should create an instance of CurrentVisitors", () => {
        expect(currentVisitors).toBeInstanceOf(CurrentVisitors);
    });

    it("should added visitor", () => {
        currentVisitors.addVisitor("Bob","bob@.mail",["letter1","letter2"]);
        expect(currentVisitors.getVisitors()?.[0]).toEqual({
            name:"Bob",
            contact:"bob@.mail",
            mailBox:["letter1","letter2"]
        });
    });

    it("should notify to visitors before closing", () => {
        currentVisitors.notifyBeforeClosing();
        expect(currentVisitors.getVisitors()[0]?.mailBox).toBeUndefined();
        //.toEqual("The zoo will close in 15 minutes")
    });


});