const mongoose= require('mongoose');

const jobsSchema= new mongoose.Schema({
    title:{
        type: String,
        required:true,
        min:6,
        max:255
    },
    salary:{
        type: String,
        required:true,
        min:6,
        max:255
    },
    desc:{
        type: String,
        required:true,
        min:6,
        max:255
    }
})

module.exports = mongoose.model('jobs',jobsSchema);
