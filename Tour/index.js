const express = require('express');
const User = require('./model/user');
const page  = require ('./routers/page');
const auth = require ('./controllers/auth');
const bodyparser = require('body-parser');
const cookie = require ('cookie-parser')
const app = express();
const port = 3000;


app.use(express.static('./public/assets'))
app.use('/js', express.static('./public/js'))
app.use('/', page )
app.set('view engine', 'ejs')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cookie())
app.listen(port, () =>{
    console.log(`app listening at port http://localhost:${port}`)
})

User.connect((err) => {
    if (err) throw err
    console.log("database connected")
})

app.get('/', (req, res) => {
    User.find().then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err);
    })
});
app.use('/api', auth)
