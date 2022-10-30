const sql = require ('mysql')
const fs = require('fs');
const dotenv = require ('dotenv').config()
const user = sql.createConnection({
    host     : process.env.DATABASE_HOST,
    user     : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE,
    ssl: {
        cert: fs.readFileSync("C:\\Users\\19522\\Downloads\\DigiCertGlobalRootCA.crt.pem"),
        rejectUnauthorized: true,
      },
})

module.exports = user
