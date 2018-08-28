const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: String,
    location: {
        lat: Number,
        lng: Number,
    },
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
