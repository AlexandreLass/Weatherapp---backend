const mongoose = require('mongoose')

const citySchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    name : String,
    main: String,
    description : String,
    tempMin : Number,
    tempMax : Number,
})

const City = mongoose.model('cities', citySchema)
module.exports = City;