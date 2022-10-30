const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../model/user')
const dotenv = require('dotenv').config()

const login =  (req, res) => {

    const { email, password: plainTextPassword} = req.body
    //no value entered
    if (!plainTextPassword || !email) {
      return res.json({status: 'error', error: 'Invalid email/ password'})
    }
    else {  
      User.query('SELECT * FROM user_info WHERE Email = ?', [email], async (error, result) => {
        if (error) throw error
        const validPassword = await bcrypt.compare(plainTextPassword, result[0].Password)
        //enter wrong username or password 
        if ( !result[0] || !validPassword) {
          return res.json({status: 'error', error: 'Incorrect email or password'}) }
        //In case the username, password is entered correctly
        else {
          const token = jwt.sign({
            id: result[0].id, 
            Email: result[0].Email
          },
          process.env.JWT_SECRET,{
          expiresIn: process.env.JWT_EXPIRES
          })
          const cookie_option = {
            expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES *24 *60 *60 *1000),
            httpOnly: true,
            secure: false
          }
          res.cookie('userRegister', token, cookie_option)
          return res.json({status: 'ok', success: 'Logged in successfully', data: token})

        }
      })
    }
  }
module.exports = login