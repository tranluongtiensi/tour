const User = require('../model/user')

const contact = (req, res) => {
      const { username, email, message} = req.body
              post = {Name: username,  Email: email, Message: message}
              User.query('INSERT INTO user_contact SET ?', post, (error, result) => {
                  if (error) throw error
                  return res.json ({status: 'ok', success: 'send success'})
              })     
          }

  module.exports = contact