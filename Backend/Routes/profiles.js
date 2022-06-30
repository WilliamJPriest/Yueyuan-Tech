const router = require('express').Router();
const User= require('../Models/User.js')
const profiles = require('../Models/Profiles.js');
const authMiddleWare=require('./verifyToken');
const jwt= require('jsonwebtoken');
const {profileValidation}= require('../validation')

router.post('/profiles', authMiddleWare, async ( req,res)=>{
    const token= req.header('x-auth-token');
    const userDetails = await User.findById(jwt.decode(token))

    const {error}=profileValidation(req.body);
    if(error)return res.status(400).send(error.details[0].message)

    
    const loadedProfile= new profiles({    
        name: userDetails.username,
        bio: req.body.bio,
        contact: req.body.contact
    });
    try{
         const savedProfile= await loadedProfile.save()
         res.json(savedProfile)
         return
    }catch(err){
        res.status(400).send(err)
        return

    }
});
router.get('/profiles', async (req,res)=> {
    try{
        const savedProfile= await profiles.find()
        return res.status(200).json({
            success: true,
            count: savedProfile.length,
            data: savedProfile,
        });
    }catch(err){
        console.log(err)
        res.status(500)
    }

});

module.exports= router
