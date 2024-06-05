const mongoose = require('mongoose')

const medicineSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    bula: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: false
    },

})

const Medicine = mongoose.model('Medicine', medicineSchema)
module.exports = Medicine


