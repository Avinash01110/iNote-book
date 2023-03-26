const express = require("express")
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const jwt_secret_key = "...avi@5697310..."

// Route1 : Creating the user using the: POST "api/auth/createuser". No login required
router.post("/createuser",
    body('name','Invalid name').isLength({min:3}),
    body('email','Invalid email').isEmail(),
    body('password','password must be atleast 5 characters').isLength({ min: 5 }),
    async(req, res) => {
      
        // Checking for the error

        let success = false

        const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({success,errors: errors.array() });
      }

      try{

        //   Checking for the already exist email.
        let user = await User.findOne({email:req.body.email})
        if(user){
            return res.status(500).json({success,errors:"Sorry a user with this email already exist"})
        }
      
      const salt = await bcrypt.genSalt(10)
      const secure_password = await bcrypt.hash(req.body.password,salt)

      // creating the user
      user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secure_password,
        })

        const data = {
          user: {
            id: user.id
          }
        }
        // This is to generate the token in corresponding to the login credentials of the user.

        const auth_token = jwt.sign(data,jwt_secret_key)
        // console.log(auth_token)
        success = true
        res.json({success,auth_token})

    }catch(error){
        console.error(error.message)
        res.status(500).send("Intenal server error.")
    }
})





    //Route2 : Authenticate the User using the: POST "api/auth/login". No login required.

    router.post("/login",
      body("email","Enter a valid email").isEmail(),
      body("password","Password cannot be blank").exists()
    ,async (req,res)=>{
      // Checking for the error
      let success = false

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array()});
      }

      const {email,password} = req.body

      try{
        let user = await User.findOne({email})
        if(!user){
          return res.status(400).json({success, error:"Please try to login with user credentials."})
        }

        const password_compare = await bcrypt.compare(password,user.password)
        if(!password_compare){
          success = false 
          return res.status(400).json({ error:"Please try to login with user credentials."})
        }

        const data = {
          user: {
            id: user.id
          }
        }

        const auth_token = jwt.sign(data,jwt_secret_key)
        // console.log(auth_token)
        success = true
        res.json({success,auth_token})

      }catch(error){
        console.error(error.message)
        res.status(500).send("Intenal server error.")
      }


  // Route3 : get loggedin user details using : POST "/api/auth/getuser". Login required.
  router.post("/getuser",fetchuser,
    async (req,res)=>{
      try{
        userid = req.user.id
        const user = await User.findById(userid).select("-password")
        res.send(user)
      }catch(error){
        console.error(error.message)
        res.status(500).send("Intenal server error.")
      }

    }
  )


})


module.exports = router