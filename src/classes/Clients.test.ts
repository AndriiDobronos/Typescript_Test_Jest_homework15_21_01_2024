import {Clients} from "./Clients";

describe("Clients", () => {
    let clients: Clients;

    beforeEach(() => {
        clients = new Clients();
    });

    it("should create an instance of Clients", () => {
        expect(clients).toBeInstanceOf(Clients );
    });

    it("should managed Budget", () => {
        const client = {
            name:"Bob",
            contact:"bob@.mail",
            mailBox:["letter1","letter2"]
        }
        clients.addClient(client);
        expect(clients.clientListData?.[0]).toEqual({
            name:"Bob",
            contact:"bob@.mail",
            mailBox:["letter1","letter2"]
        });
    });

});