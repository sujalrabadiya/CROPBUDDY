const mongoose = require("mongoose");

const soilMoistureReadingSchema = new mongoose.Schema({
    plantId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    moistureLevel:{
        type:Number,
        require:true
    },
    timestamp:{
        type:Date,
        require:true
    },
});

const  SoilMoistureReading = new mongoose.model('SoilMoistureReading',soilMoistureReadingSchema);

module.exports = {SoilMoistureReading, soilMoistureReadingSchema}