const { Double } = require('mongodb')
const mongoose = require('mongoose')

const medicineSchema = new mongoose.Schema({
    image: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    bula: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false,
        validate: {
            validator: function(v) {
                // Valida se o valor é um número
                return typeof v === 'number';
            },
            message: 'O preço deve ser um número'
        }
    }

})

const Medicine = mongoose.model('Medicine', medicineSchema)
module.exports = Medicine


