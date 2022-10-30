const bcrypt = require ('bcryptjs')
const User = require('../model/user')

const register = async (req, res) => {
      const { username, password: plainTextPassword, password_confirmation: someOtherPlaintextPassword, email} = req.body

      if (!username || typeof username !== 'string') {
         return res.json({ status: 'error', error: 'Invalid username'})
      }
      if (!plainTextPassword || typeof someOtherPlaintextPassword !== 'string') {
         return res.json({ status: 'error', error: 'Invalid password'})
      }
      User.query('SELECT * FROM user_info WHERE Email = ?', [email], async (error, result) => {

          if (error) throw error
          if (result[0]) {
            const validPassword = await bcrypt.compare(plainTextPassword, result[0].password) 
            const validPasswordConfirmation =  await bcrypt.compare(someOtherPlaintextPassword, result[0].password_confirmation)
            /* compare the password confirmation, password and phone number if it 
            is the same as the password, password confirmation, phone number stored in mysql.
            If it's the same then show message "user already in use please login"
            */
            if ( validPassword && validPasswordConfirmation && email == result[0].Email) {
              return res.json({status: 'ok', success: 'user already in use please login'})

            }
            if (email != result[0].Email){
              return res.json({status: 'error', error: 'email is already in use, please enter another email'})
            }
            else{
              return res.json({status:'error', error: 'email is already in use, please enter another email'})
            }
          }
          else {
              const password = await bcrypt.hash(plainTextPassword, 10)
              post = {Name: username, Password: password, Email: email}
              User.query('INSERT INTO user_info SET ?', post, (error, result) => {
                  if (error) throw error
                  return res.json ({status: 'ok', success: 'user successfully created'})
              })     
          }
      })
  }

  module.exports = register