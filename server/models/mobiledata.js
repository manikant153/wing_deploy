const mongoose = require('mongoose');
const schema = mongoose.Schema;

const mobileSchema = new schema({
    brand: {
        type: String,
        required: true
    },
    modelname: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    warranty: {
        type: String,
        required: true
    },
    batterhealth: {
        type: String,
        required: true
    },
    anymoredeatils: {
        type: String
    },
    image: { // New field to store the image filename
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Mobile', mobileSchema);
