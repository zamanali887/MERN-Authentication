const express = require('express');
const router = express.Router();
const authModel = require('../Models/authUser');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// Body parsing middleware
router.use(express.json());

    // register user

    router.post("/register" , async(req,res)=>{

        const user = req.body

        const getPassword = user.password

        const hashPassword = await bcrypt.hash(getPassword , 8)

        user.password = hashPassword

        const newUser = new authModel(user) 
        try{
           await newUser.save()
           res.json(user)

        }catch(err){
            console.log('err', err)
            res.json(err)
        }
    })


// Login router


router.post("/login" ,async(req ,res )=>{
    const user = req.body

    const verifyEmail = await authModel.findOne({email:user.email})

    if(!verifyEmail){
        return res.status(404).json({messege :"User Not Found"})
    }
    const verifyPassword = bcrypt.compare(user.password, verifyEmail.password)

    if(!verifyPassword){
        return res.status(404).json({messege:"user password incorrect"})
    }
    var token = jwt.sign({id: verifyEmail._id}, process.env.PRIVITE_KEY);

    return res.status(200).json({messege:"user logged in" , token});
})








// Register new user in Database
// router.post("/register", async (req, res) => {
//     let user = req.body;
//     let hashPassword = await bcrypt.hash(user.password, 8);
//     user.password = hashPassword;

//     const newUser = new authModel(user);
//     try {
//         await newUser.save();
//         res.json(user);
//     } catch (err) {
//         res.json(err);
//     }
// });

// Logging user
// router.post("/login", async (req, res) => {
//     let user = req.body;
    
//     let findUser = await authModel.findOne({ email: user.email });

//     if (!findUser) {
//         return res.status(404).json({ message: "Email Not Found" });
//     }

//     let checkPassword = await bcrypt.compare(user.password, findUser.password);

//     if (!checkPassword) {
//         return res.status(401).json({ message: "Invalid Password" });
//     }
  
//     var token = jwt.sign({ id: findUser._id }, process.env.PRIVITE_KEY);

//     return res.status(200).json({ message: "User logged in!", token });
// });

module.exports = router;
