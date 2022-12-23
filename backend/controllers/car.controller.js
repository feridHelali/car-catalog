const express=require("express");
const router = express.Router();
const carService = require("../services/car.service");


router.post("/add",async (req,res)=>{
     const car = req.body;
     const result = await carService.addCar(car);
    res.json({message:result})
})

router.get("/all",async (req,res)=>{
    const result = await carService.getallCars();
    res.json({message:result})
})



module.exports=router;