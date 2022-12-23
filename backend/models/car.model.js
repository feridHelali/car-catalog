const mongoose=require("mongoose");


const CarSchema = mongoose.Schema({
    brand:{
        type:String,
        require:true,
    },
    label:{
        type:String,
        require:true,
        unique:true
    },
    price:{
        type:Number
    },

})

module.exports = mongoose.model("Car",CarSchema)