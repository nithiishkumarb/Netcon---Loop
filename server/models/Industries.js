const mongoose = require('mongoose');
const IndustrySchema = new mongoose.Schema({
    Industry_ID: {
        type: Number,
        required: true
    },
    Industry_name: {
        type: String,
        required: true
    },
    Industry_place: {
        type: String,
        required: true
    },
    Generator_id:{
        type:Number,
        required:true
    },
    Tank_id:{
        type:Number,
        required:true
    }
},{ versionKey: false });
module.exports = mongoose.model('Industry', IndustrySchema);

