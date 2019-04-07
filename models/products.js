var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./util');

var productSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String},
    price: { type: Number},
    category: { type: String},
    stockCount: { type: Number},
    description: { type: String},
    productImage: { type: String},
    cart: {type: String}
});

module.exports = mongoose.model('Product', productSchema);