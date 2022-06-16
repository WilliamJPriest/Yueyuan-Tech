const mongoose= require('mongoose');

const profileSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true,
        min:6,
        max:255
    },
    bio:{
        type: String,
        required:false,
        min:6,
        max:400
    },
    contact:{
        type: String,
        required:false,
        min:6,
        max:200
    }
}) 

module.exports= mongoose.model('Profiles',profileSchema);