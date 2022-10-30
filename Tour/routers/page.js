
const express = require ('express')
const router = express.Router()

router.get('/', (req, res) => {
    if(req.user){
        res.render('index', {status: "loggedin", user: req.user})
    }
    else{
    res.render('index', {status: 'nothing', user: 'nothing'})
    }
})

router.get('/register', (req, res) => {
    res.render('register')
})
router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/home', (req, res) => {
    res.render('index')
})
module.exports = router