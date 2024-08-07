const express = require('express');
const {
    getusers,getuser,postuser
} = require("../controllers/user_controller");

const route = express.Router();

route.get('/read/users',getusers);
route.get('/read/user/:id',getuser);
route.post('/add/user',postuser);

module.exports = route;
