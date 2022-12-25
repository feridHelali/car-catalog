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

const getCarById = async (id)=>{
    const result = await Car.find({_id:id});
    return result;
}


const updateCar = async (id,newCar)=>{
    const result = await Car.findByIdAndUpdate(id,newCar);
    return result;

}

const removeCar = async (id)=>{
    const result = await Car.deleteOne({_id:id});
    return result;
}

module.exports ={
    addCar,
    getallCars,
    updateCar,
    removeCar,
    getCarById
}