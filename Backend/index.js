const express = require('express');
const app=express();
const dotenv = require('dotenv');
const mongoose= require('mongoose');
const cors= require('cors');
const bp = require('body-parser')



const authRoute = require('./Routes/auth');
const postsRoute= require('./Routes/posts');
const profilesRoute = require('./Routes/userProfiles');

dotenv.config();

mongoose
    .connect(
        process.env.DB__Connect,)
    .then(() => console.log("Connected!"))
    .catch(err => console.log(err))
    



app.use(express.json());
app.use(cors());
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use('/api/user',authRoute);
app.use('/api',postsRoute);
app.use('/api',profilesRoute);

app.listen(3001,()=> console.log("hello"))