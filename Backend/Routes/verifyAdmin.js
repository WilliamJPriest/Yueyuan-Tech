const jwt = require('jsonwebtoken')

module.exports= function verifyAdmin(res,req,next){
    const token = req.header("X auth-token")
    if(!token) return res.status(401).send("access denied");
    const decodedToken= jwt.decode(token)
    if(decodedToken.admin===true){
        req.user=decodedToken;
        next()
        return
    }
    res.status(400).send("token error")
 }