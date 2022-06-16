const router = require('express').Router();
const profiles = require('../Models/Profiles.js');
// const authMiddleWare=require('./verifyToken');
// const jwt= require('jsonwebtoken');
const {profileValidation}= require('../validation')

router.post('/profiles', async ( req,res)=>{
    const {error}=profileValidation(req.body);

    if(error)return res.status(400).send(error.details[0].message)
    
    const loadedProfile= new profiles({    
        name: req.body.name,
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
module.exports= router
