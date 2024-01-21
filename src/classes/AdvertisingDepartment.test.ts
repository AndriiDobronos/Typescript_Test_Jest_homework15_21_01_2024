import {AdvertisingDepartment} from "./AdvertisingDepartment";

describe("AdvertisingDepartment", () => {
    let advertisingDepartment: AdvertisingDepartment;

    beforeEach(() => {
        advertisingDepartment = new AdvertisingDepartment([{
            name:"Bob",
            contact:"bob@.mail",
            mailBox:["letter1","letter2"]
        }]);
    });

    it("should create an instance of AdvertisingDepartment", () => {
        expect(advertisingDepartment).toBeInstanceOf(AdvertisingDepartment);
    });

    it("should send a new email to clients", () => {
        const event = "Opening of a new attraction";
        advertisingDepartment.sendAdvertisingNews(event);

        expect(advertisingDepartment.getClients()[0]?.mailBox).toEqual(["letter1","letter2",`There will be an ${event} at the zoo`]);
    });

});