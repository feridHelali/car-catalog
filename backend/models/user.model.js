const mongoose=require("mongoose");


const UserSchema = mongoose.Schema({
    fullName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatarUrl:{
        type:String
    }

})

module.exports = mongoose.model("User",UserSchema)