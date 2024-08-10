const Plant = require("../models/plant-model");
const WaterUsage = require("../models/waterUsage-model");
const Alert = require("../models/alert-model");


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

const insertAlert = async (req, res) => {
    try {
        const data = req.body;

        const waterUsageCreated = await Alert.create(data);

        res
        .status(201).json({
            message: "Alert Insertion Successfull",
            alertId: alertCreated._id.toString()
        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"page not found"})
    }

};

const updateAlertById = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const updatedData = await Alert.updateOne(
            {_id: id},
            {$set: updates},
            );
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
}

const deleteAlertById = async (req, res) => {
    try {
        const id = req.params.id;
        await Alert.deleteOne({_id: id});
        return res.status(200).json({message: "Alert Deleted Successfully"});
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
};
// for waterUsage end //

module.exports = { getAllPlant, getPlantById, updatePlantById, deletePlantById, insertPlant, getAllWaterUsage, getWaterUsageById, updateWaterUsageById, deleteWaterUsageById, insertWaterUsage, getAllAlert, getAlertById, updateAlertById, deleteAlertById, insertAlert };




