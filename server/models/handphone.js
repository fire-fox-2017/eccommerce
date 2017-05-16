var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var handphoneSchema = new Schema({
  img: String,
  brand: String,
  price: String,
  description: String,
  rating: Number,
  quantity: Number
});

module.exports = mongoose.model('Handphone', handphoneSchema);