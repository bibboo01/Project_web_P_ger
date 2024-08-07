const mongoose = require('mongoose');

const myStd_details_Tbl = new mongoose.Schema({
    std_id: { type: String, required: true },
    std_father_name: { type: String, required: true }, 
    std_father_tel: { type: String, required: true }, 
    std_mother_name: { type: String, required: true }, 
    std_mother_tel	: { type: String, required: true }, 
    std_parent_name: { type: String, required: true }, 
    std_parent_tel	: { type: String, required: true }, 
    std_parent_rela: { type: String, required: true }, 
    allergic_things: { type: String, required: true }, 
    allergic_drugs: { type: String, required: true }, 
    allergic_condition: { type: String, required: true }, 
});

module.exports = mongoose.model('std_details_tbl',myStd_details_Tbl);