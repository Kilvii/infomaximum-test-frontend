import { observable, computed } from 'mobx';
import carsJSON from "../fake_cars.json";

class CarStore {

    @observable accessor allCars = carsJSON.map(car => ({ ...car, favorite: false }));

    @computed get favoriteCars() {
        return this.allCars.filter(car => car.favorite);
    }

    toggleFavorite(car: typeof this.allCars[0]) {
        car.favorite = !car.favorite;
      }
}

const carStore = new CarStore();

export { carStore };