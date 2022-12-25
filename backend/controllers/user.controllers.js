const express = require('express')
const router = express.Router()
const userService = require("../services/user.service");
const authentication = require("../middlewares/authentication.middleware")


router.post('/login',async function (req, res) {
   const {email,password} = req.body;
   try {
    const result = await userService.login(email,password);
    res.json(result);
   } catch (error) {
    res.json({message:"500 Server Error",error});
   }
})


router.post('/register',async function (req, res) {
   const {fullName,email,password} = req.body;
   try {
    const result = await userService.register(fullName,email,password);
    res.json(result);
   } catch (error) {
     res.json({message:"500 Server Error",error});
   }

})

router.get('/all', authentication ,async function(req,res){
   try {
      const result = await userService.allUsers();
      res.json(result);
   } catch (error) {
      res.json({message:"500 Server Error",error});
   }
})

module.exports = router