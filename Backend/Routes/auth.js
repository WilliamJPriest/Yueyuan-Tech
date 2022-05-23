const router= require('express').Router();
const User = require('../Models/User.js');
const {registerValidation,loginValidation}=require('../validation');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken')


router.post('/register', async (req,res)=>{
    const {error}= registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const userExists= await User.findOne({username: req.body.username})
    if (userExists) return(res.status(400).send("this username is already taken"))

    const emailExist= await User.findOne({email: req.body.email})
    if(emailExist) return(res.status(400).send("This email is already taken"))

    const salt= await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(req.body.password,salt);

  
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
      try{  
        const savedUser= await user.save();
        res.send(savedUser)
      }catch(err){
        res.status(400).send(err);
      }
});

router.post('/login', async (req,res)=>{
  const {error}=loginValidation(req.body)
  if(error) return(res.status(400).send(error.details[0].message))

  const userDetails= await User.findOne({email: req.body.email}) 
  if(!userDetails) return(res.status(400).send("email doesn't exist"))

  const passwordValidation= await bcrypt.compare(req.body.password,userDetails.password)
  if(!passwordValidation) return(res.status(400).send("password is incorrect"))

  const userToken= jwt.sign({_id: userDetails._id},process.env.HIDDEN__TOKEN);
  res.header('auth-token',userToken).send(userToken);

})

module.exports=router;

