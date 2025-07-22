import express from 'express'
import User from './../models/User.js'
import sendResponse from '../helper/sendResponse.js'
import bcrypt from 'bcryptjs'
import 'dotenv/config'

const router = express.Router()

// Create a new user
router.post('/register', async (req, res) => {
  try {
    const { email, username, password } = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({ email, username, password: hashedPassword })
    await newUser.save()
    sendResponse(res, 200, newUser, 'User registered successfully')
  } catch (error) {
    console.log('Error ===> ', error)
    sendResponse(res, 400, null, 'Email Already Registered: ')
  }
})

// User login
router.post('/login', async (req, res) => {
  try {

    const user = await User.findOne({email : req.body.email})

    if (!user) {
        sendResponse(res, 404, null, 'Please Register First')
    }

    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
    if (!isPasswordValid) {
      return sendResponse(res, 401, null, 'Invalid Credentials')
    }

    const { password, ...userData } = user._doc
    sendResponse(res, 200, userData, 'Login Successfully')


  } catch (error) {
    console.log('Error ===> ', error)
    sendResponse(res, 400, null, 'Email Already Registered: ')
  }
})

export default router
