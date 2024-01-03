const mongoose = require('mongoose');
const GeneratorSchema = new mongoose.Schema({
    Generator_ID: {
        type: Number,
        required: true
    },
    Generator_location: {
        type: String,
        required: true
    },
    Industry_ID: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Generator', GeneratorSchema);

