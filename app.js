const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {console.log("MONGO DB connected")})
    .catch(err => console.log(err));



const Myuser = require('./routes/user_route');



app.use('/user',Myuser);



app.listen(process.env.PORT, 
    ()=> console.log("Server run on localhost:" + process.env.PORT));