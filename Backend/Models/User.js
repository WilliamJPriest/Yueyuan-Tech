const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        min:6,
        max:255
    },
    email: {
        type: String,
        required:true,
        min:6,
        max:255
    },
    password: {
        type: String,
        required:true,
        min:6,
        max:255
    },
    admin: {
        type: Boolean
    }
})

module.exports = mongoose.model('User',userSchema);