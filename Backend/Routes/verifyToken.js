const jwt = require('jsonwebtoken')

module.exports =function (req,res,next){
    const token= req.header('x-auth-token');
    if (!token) return res.status(401).send("Access Denied")
    try{
        const verifiedToken= jwt.verify(token, process.env.HIDDEN__TOKEN)
        req.user =verifiedToken
        next()
    }catch{
        res.status(400).send("token error")
    }
}