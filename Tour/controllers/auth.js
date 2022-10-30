const express = require('express')
const register = require ('./register')
const login = require ('./login')
const contact = require ('./contact')
const buyTickets = require('./buyTickets')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/contact', contact)
router.post('/buytickets', buyTickets)


module.exports = router