const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const formatResponse = require("../utilities/format.response");
const jwt = require('jsonwebtoken');

const register = async (fullName, email, password) => {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
        const result = formatResponse("Error", "User Already Exist. Please Login");
        return result;
    }

    const encryptedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
        fullName,
        email,
        password: encryptedPassword
    });


    return formatResponse("Success", "User Registered Successfully", newUser)

}

const login = async (email, password) => {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ user_id: user._id, email },process.env.ALFA_TOKEN_KEY || "ALFA_TOKEN_KEY",{expiresIn: "2h",});
        return formatResponse("Success", "Login Successfully",{...user._doc,token:token})
    } 

    return formatResponse("Error", "Invalid Credentials")
}

const allUsers = async()=>{
    const result = await User.find({});
    if(!result){
        return formatResponse("error","cant't get all users")
    }

    return formatResponse("Success","All Users",result);
}

    module.exports = {
        register,
        login,
        allUsers
    }