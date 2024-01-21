import {IAnimal} from "../interfaces/animal.interface";

// Тварини
export class Animals {
    private animalData: IAnimal[] = [];

    getAnimalData(animal:IAnimal) {
        return this.animalData;
    }

    addAnimalData(animal:IAnimal):void {
        this.animalData.push(animal);
    }
}
