const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OnerepmaxSchema = new Schema({
  lift: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Onerepmax', OnerepmaxSchema)

