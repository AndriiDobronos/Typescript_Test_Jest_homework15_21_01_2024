import {ZooFacade} from "./ZooFacade";

describe("ZooFacade", () => {
    let zooFacade: ZooFacade;

    beforeEach(() => {
        zooFacade = new ZooFacade();
    });

    it("should create an instance of ZooFacade", () => {
        expect(zooFacade).toBeInstanceOf(ZooFacade);
    });

    it("should added DailyRevenue and client", () => {
        zooFacade.sellTicket("Bob","bob@.mail","Adult",5);
        expect(zooFacade.getRevenue()?.getDailyRevenue()).toEqual(5);
        expect(zooFacade.getClients()?.clientListData).toEqual([{
        contact: "bob@email.com",
            mailBox:[],
            name: "Bob" }]);
    });

    it("should add email to clients to their mailbox", () => {
        zooFacade.closeZoo();
        zooFacade.getAdvertisingDepartment()?.sendAdvertisingNews("event");
        expect(zooFacade.getAdvertisingDepartment()?.getClients()[0]?.mailBox).toEqual([
            "","","There will be an event at the zoo","There will be an event at the zoo"]);
    });

    it("should add employee", () => {
        zooFacade.manageEmployeesAndAnimals();
        zooFacade.getEmployees()?.addEmployeeData({
            position:"Manager",
            name:"Mark",
            salary:900
        });
        expect(zooFacade.getEmployees()?.employeeData?.[1]).toEqual({
            position:"Manager",
            name:"Mark",
            salary:900
        });
    });
});