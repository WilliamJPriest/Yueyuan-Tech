const router = require('express').Router();
const profileSchema = require('../Models/Profiles');
const authMiddleWare=require('./verifyToken');
const jwt= require('jsonwebtoken');

//create profile validation to pervent users from overflowing text boxes.
