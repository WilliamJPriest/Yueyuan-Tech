const router = require('express').Router();
const User= require('../Models/User.js')
const Profiles = require('../Models/Profiles.js');
const authMiddleWare=require('./verifyToken');
const jwt= require('jsonwebtoken');
const {profileValidation}= require('../validation')

router.post('/profiles',  async ( req,res)=>{
    const token= req.header('x-auth-token');

    const {error}=profileValidation(req.body);
    if(error)return res.status(400).send(error.details[0].message)

    
    const loadedProfile= new Profiles({   
        name: req.body.name, 
        bio: req.body.bio,
        contact: req.body.contact,
        icon: req.body.icon,
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
        const savedProfile= await Profiles.find()
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
