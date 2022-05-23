const router= require('express').Router();
const Jobs= require('../Models/jobs.js');
const {postValidation}=require('../validation');
const authMiddleWare=require('./verifyToken')

router.post('/posts', async (req, res)=>{
    const {error}= postValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    
    const jobPosting= new Jobs({    
        title: req.body.title,
        salary: req.body.salary,
        desc: req.body.desc
    });
    try{
        const savedJobPosting= await jobPosting.save()
        res.send(savedJobPosting)
    } catch(err){
        res.status(400).send(err)

    }

    });

router.get('/posts',authMiddleWare,(req,res)=>{
    res.send(req.user);
})
module.exports= router;