const mongoose = require("mongoose");

const weatherDataSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    location:{
        type: String,
    },
    temperature:{
        type:Number,
        require:true
    },
    humidity:{
        type:Number,
        require:true
    },
    precipitation:{
        type:Number,
        require:true
    },
    timestamp:{
        type:Date,
        require:true
    },
});

const  WeatherData = new mongoose.model('WeatherData',weatherDataSchema);

module.exports = WeatherData