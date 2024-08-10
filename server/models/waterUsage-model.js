const mongoose = require("mongoose");

const waterUsageSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    plantId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    amount:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        require:true
    },
});

const  WaterUsage = new mongoose.model('WaterUsage',waterUsageSchema);

module.exports = {WaterUsage, waterUsageSchema}