
const express = require("express");

const dotenv = require('dotenv');

const cors = require("cors");
dotenv.config({path:'./config.env'})

const userRoutes = require('./routes/userRoutes.js')
const app = express();
app.use(cors())
const port = process.env.PORT;

app.use(express.json());
app.use('/',userRoutes);
app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})