const mongoose = require('mongoose');
const TanksSchema = new mongoose.Schema({
    Tank_ID: {
        type: Number,
        required: true
    },
    Tank_location: {
        type: String,
        required: true
    },
    Industry_ID: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Tanks', TanksSchema);

