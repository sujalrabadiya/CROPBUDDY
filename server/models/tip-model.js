const { Schema, model } = require("mongoose");

const tipSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    category: {type: String, required: true},
});

const Tip = new model('Tip', tipSchema);

module.exports = Tip;