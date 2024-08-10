const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    plantId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    alertType:{
        type: String,
    },
    message:{
        type:String,
        require:true
    },
    timestamp:{
        type:Number,
        require:true
    },
    precipitation:{
        type:Number,
        require:true
    },
    resolved:{
        type:Boolean,
        default: false
    },
});

const  Alert = new mongoose.model('Alert',alertSchema);

module.exports = {Alert, alertSchema}