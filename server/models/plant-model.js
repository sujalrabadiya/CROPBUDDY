const mongoose = require("mongoose");
const { soilMoistureReadingSchema } = require("./soilMoistureReading-model");

const plantSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    name:{
        type:String,
        require:true
    },
    plantType:{
        type:String,
        require:true
    },
    soilMoistureThreshold:{
        type:Number,
        require:true
    },
    soilMoistureReading: {
        type: [soilMoistureReadingSchema],
    },
    wateringSchedule :{
        type:[Date],
        require:true
    },
    lastWatered :{
        type:Date,
    },
});

const  Plant = new mongoose.model('Plant',plantSchema);

module.exports = {Plant, plantSchema}