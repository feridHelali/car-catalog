const express = require("express")
const cors = require("cors")
const carRouter = require("./controllers/car.controller")


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/cars",carRouter);

module.exports=app;
