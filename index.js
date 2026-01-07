const express = require('express');
const dotenv = require('dotenv');
const app = express();
//importig dotenv
dotenv.config();
const PORT = process.env.PORT || 3000; 
//crating a server 
app.listen(PORT, ()=>{
    console.log("Server is running at port", PORT);
})
//exporting app
module.exports = app;


