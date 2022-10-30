const User = require('../model/user')

const ticket = (req, res) => {
      const { quantity, email} = req.body
              post = {Quantity: quantity,  Email: email}
              User.query('INSERT INTO user_tickets SET ?', post, (error, result) => {
                  if (error) throw error
                  return res.json ({status: 'ok', success: 'payment success'})
              })     
          }

  module.exports = ticket