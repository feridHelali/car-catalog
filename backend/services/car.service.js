const Car = require("../models/car.model")

const addCar = async (car) => {
    const newCar = new Car(car);
    const result = await newCar.save();
    return result;

}

const getallCars = async ()=>{
    const result = await Car.find({});
    return result;
}

module.exports ={
    addCar,
    getallCars
}