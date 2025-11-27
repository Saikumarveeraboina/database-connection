const app = require('./index.js');
const dotenv = require('dotenv')

dotenv.config()
//simple route
app.get('/', (req, res) =>{
    res.send("Hello World")
})
//Connecting to database connection
const mysql2 = require('mysql2');

const mysql = mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,

})
mysql.connect((err, data) => {
    if (err) {
        console.log("Error while connecting to database", err);
    }
    else {
        console.log("Database connected successfully");
    }
    
})
