const Plant = require("../models/plant-model");
const WaterUsage = require("../models/waterUsage-model");
const Alert = require("../models/alert-model");
const Tip = require("../models/tip-model");
const { SoilMoistureReading } = require('../models/soilMoistureReading-model');
const { default: axios } = require("axios");

// for plants start//
const getAllPlant = async (req, res) => {
    try {
        const plant = await Plant.find({userId: req.user.id});
        if(plant.length === 0) {
            return res.status(404).json({message: "No Plant Found"});
        }
        return res.status(200).json(plant);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: "page not found"});
    }
}

const getPlantById = async (req, res) => {
    try {
        const id = req.params.id;
        const plant = await Plant.findOne({_id: id});
        res.status(200).json(plant);
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
}

const insertPlant = async (req, res) => {
    try {
        const data = req.body;

        const plantExist = await Plant.findOne( {
            $or:[
                {name: data.name},
            ]
        } );

        if (plantExist) return res.status(400).json({ message: 'Plant already exists' });

        const plantCreated = await Plant.create(data);

        res
        .status(201).json({
            message: "Plant Insertion Successfull",
            plantId: plantCreated._id.toString()
        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"page not found"})
    }

};

const updatePlantById = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const updatedData = await Plant.updateOne(
            {_id: id},
            {$set: updates},
            );
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
}

const deletePlantById = async (req, res) => {
    try {
        const id = req.params.id;
        await Plant.deleteOne({_id: id});
        return res.status(200).json({message: "Plant Deleted Successfully"});
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
};
// for plants end //


// for waterUsage start //
const getAllWaterUsage = async (req, res) => {
    try {
        const waterUsage = await WaterUsage.find({userId: req.user.id});
        if(waterUsage.length === 0) {
            return res.status(404).json({message: "No Plant Found"});
        }
        return res.status(200).json(waterUsage);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: "page not found"});
    }
}

const getWaterUsageById = async (req, res) => {
    try {
        const id = req.params.id;
        const waterUsage = await WaterUsage.findOne({_id: id});
        res.status(200).json(waterUsage);
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
}

const insertWaterUsage = async (req, res) => {
    try {
        const data = req.body;

        const waterUsageCreated = await WaterUsage.create(data);

        res
        .status(201).json({
            message: "WaterUsage Insertion Successfull",
            waterUsageId: waterUsageCreated._id.toString()
        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"page not found"})
    }

};

const updateWaterUsageById = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const updatedData = await WaterUsage.updateOne(
            {_id: id},
            {$set: updates},
            );
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
}

const deleteWaterUsageById = async (req, res) => {
    try {
        const id = req.params.id;
        await WaterUsage.deleteOne({_id: id});
        return res.status(200).json({message: "WaterUsage Deleted Successfully"});
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
};
// for waterUsage end //


// for alert start //
const getAllAlert = async (req, res) => {
    try {
        const alerts = await Alert.find({userId: req.user.id});
        if(alerts.length === 0) {
            return res.status(404).json({message: "No Plant Found"});
        }
        return res.status(200).json(alerts);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: "page not found"});
    }
}

const getAlertById = async (req, res) => {
    try {
        const id = req.params.id;
        const alert = await Alert.findOne({_id: id});
        res.status(200).json(alert);
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
}
// for waterUsage end //

// for tip //
const getAllTip = async (req, res) => {
    try {
        const tip = await Tip.find({userId: req.user.id});
        if(tip.length === 0) {
            return res.status(404).json({message: "No Tip Found"});
        }
        return res.status(200).json(tip);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: "page not found"});
    }
}

const getTipById = async (req, res) => {
    try {
        const id = req.params.id;
        const tip = await Tip.findOne({_id: id});
        res.status(200).json(tip);
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
}
// for tip end //

// for weather //

const apiKey = process.env.WEATHER_API_KEY;

const getWeather = async (req, res) => {
    const city = req.params.city;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    try {        
      const response = await axios.get(url);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching weather data' });
    }
  }
// for weather end //


// for plants start//
const getSoilMoistureReading = async (req, res) => {
    try {
        const soilMoistureReading = await SoilMoistureReading.find({plantId: req.params.plantId});
        if(soilMoistureReading.length === 0) {
            return res.status(404).json({message: "No SoilMoistureReading Found"});
        }
        return res.status(200).json(soilMoistureReading);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: "page not found"});
    }
}

const insertSoilMoistureReading = async (req, res) => {
    try {
        const data = req.body;

        const soilMoistureReadingCreated = await SoilMoistureReading.create(data);

        res
        .status(201).json({
            message: "SoilMoistureReading Insertion Successfull",
            soilMoistureReadingId: soilMoistureReadingCreated._id.toString()
        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"page not found"})
    }

};

const updateSoilMoistureReadingById = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const updatedData = await SoilMoistureReading.updateOne(
            {_id: id},
            {$set: updates},
            );
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
}

const deleteSoilMoistureReadingById = async (req, res) => {
    try {
        const id = req.params.id;
        await SoilMoistureReading.deleteOne({_id: id});
        return res.status(200).json({message: "SoilMoistureReading Deleted Successfully"});
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
};
// for soilMoistureReading end //

module.exports = { getAllPlant, getPlantById, updatePlantById, deletePlantById, insertPlant, getAllWaterUsage, getWaterUsageById, updateWaterUsageById, deleteWaterUsageById, insertWaterUsage, getAllAlert, getAlertById, getAllTip, getTipById, getWeather, getSoilMoistureReading, updateSoilMoistureReadingById, deleteSoilMoistureReadingById, insertSoilMoistureReading };




