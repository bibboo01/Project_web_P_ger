const mongoose = require('mongoose');

const myUser_sch = new mongoose.Schema({
    std_id: { type: String, required: true },
    sch_name: { type: String, required: true }, 
    sch_province: { type: String, required: true }
});

module.exports = mongoose.model('std_school_tbl',myUser_sch);