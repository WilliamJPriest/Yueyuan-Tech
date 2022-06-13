const router= require('express').Router();
const Jobs= require('../Models/jobs.js');
const User = require('../Models/User.js');
const {postValidation}=require('../validation');
const authMiddleWare=require('./verifyToken');
const jwt= require('jsonwebtoken');

router.post('/posts', authMiddleWare, async (req, res)=>{
    const token= req.header('x-auth-token');
     
    const userDetails = await User.findById(jwt.decode(token))
    const confirmAdmin= userDetails.admin;
    if (confirmAdmin===true){
        const {error}= postValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message)
        
        const jobPosting= new Jobs({    
            title: req.body.title,
            salary: req.body.salary,
            desc: req.body.desc
        });
        try{
            const savedJobPosting= await jobPosting.save()
            res.json(savedJobPosting)
            return
        }catch(err){
            res.status(400).send(err)
            return

        }
    }
     res.status(401).send("not an admin")
});

router.get('/posts', authMiddleWare,  async (req,res)=>{
    try{
        const jobPosting = await Jobs.find();
        return res.status(200).json({
            success:true,
            count: jobPosting.length,
            data: jobPosting,
        });
    }catch(err){
        console.log(err)
        res.status(500)
    }
})
module.exports= router;