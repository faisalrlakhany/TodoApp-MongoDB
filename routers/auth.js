import express from "express";
import User from './../models/User.js';
import sendResponse from "../helper/sendResponse.js";


const router = express.Router();


// Create a new user
router.post('/register', async (req, res) => {

    try {
        const { email, username , password } = req.body;
        const newUser = new User({ email, username, password });
        await newUser.save();
        sendResponse(res, 201, newUser , "User registered successfully");
    } catch (error) {
        
        sendResponse(res, 500, null, "Email Already Registered: " + error.message);

    }


})