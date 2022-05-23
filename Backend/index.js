const express = require('express');
const app=express();
const dotenv = require('dotenv');
const mongoose= require('mongoose');
const cors= require('cors');

const authRoute = require('./Routes/auth');
const postsRoute= require('./Routes/posts');

dotenv.config();

mongoose.connect(
    process.env.DB__CONNECT,
    { useNewUrlParser: true },
    ()=>{
        console.log("Connected")
    });


app.use(express.json());
app.use(cors());

app.use('/api/user',authRoute);
app.use('/api',postsRoute);

app.listen(3001,()=> console.log("hello"))