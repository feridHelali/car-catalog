const express=require("express");
const router = express.Router();
const carService = require("../services/car.service");


router.post("/add",async (req,res)=>{
     const car = req.body;
     try {
         const result = await carService.addCar(car);
         res.json({message:result})
     } catch (error) {
        res.json({Error:error.message})
     }
})

router.get("/all",async (req,res)=>{
    try {
        const result = await carService.getallCars();
        res.json({message:result})
    } catch (error) {
        res.json({Error:error.message}) 
    }
})

router.get("/one/:id",async (req,res)=>{
    try {
        const result = await carService.getCarById(req.params.id);
        res.json({message:result})
    } catch (error) {
        res.json({Error:error.message}) 
    }
})

router.put("/update/:id",async (req,res)=>{
    const id= req.params.id;
    const newCar = req.body;
    try {
        const result = await carService.updateCar(id,newCar);
        res.json({status:"success",message:result})
    } catch (error) {
        res.json({status:"error",Error:error.message}) 
    }
})

router.delete("/delete/:id",async (req,res)=>{
    const id= req.params.id;
    try {
        const result = await carService.removeCar(id);
        res.json({message:result})
    } catch (error) {
        res.json({Error:error.message}) 
    }
})




module.exports=router;