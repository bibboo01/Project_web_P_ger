const mongoose = require('mongoose');

const mystd = new mongoose.Schema({
    std_id: { type: String, required: true },
    prefix: { type: Number, required: true }, 
    std_Fname: { type: String, required: true }, 
    std_Lname: { type: String, required: true }, 
    std_nickname: { type: String, required: true },  
    std_religion: { type: String, required: true },  
    major: { type: String, required: true },  
    std_tel: { type: String, required: true },  
})

module.exports = mongoose.model('std_tbl',mystd);