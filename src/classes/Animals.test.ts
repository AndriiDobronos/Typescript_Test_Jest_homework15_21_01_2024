import {Animals} from "./Animals";

describe("Animals", () => {
    let animals: Animals;

    beforeEach(() => {
        animals = new Animals();
    });

    it("should create an instance of Animals", () => {
        expect(animals).toBeInstanceOf(Animals);
    });

    it("should add employee", () => {
        const animal = {
            species:"Lion",
            name:"Simba",
            age:5,
            isAnimalHealthy:true
        };
        animals.addAnimalData(animal);

        expect(animals.getAnimalData(animal)).toEqual([{
            species:"Lion",
            name:"Simba",
            age:5,
            isAnimalHealthy:true
        }]);
    });
});