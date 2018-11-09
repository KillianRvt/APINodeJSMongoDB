const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
    label: {type: String, required: true, max: 100},
    image: {type: String, required: true},
    description: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Item', ItemSchema);