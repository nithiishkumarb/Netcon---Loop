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
    }
});
module.exports = mongoose.model('industries', IndustrySchema);

