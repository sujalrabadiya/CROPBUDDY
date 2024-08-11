const Contact = require("../models/contact-model");
const User = require("../models/user-model");
const Alert = require("../models/alert-model");

//user
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        if(!users || users.length === 0) {
            return res.status(404).json({message: "No Users Found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({_id: id},{password: 0});
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const updatedData = await User.updateOne(
            {_id: id},
            {$set: updates},
            );
        res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
}

const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({_id: id});
        return res.status(200).json({message: "User Deleted Successfully"});
    } catch (error) {
        next(error);
    }
};

//contact
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if(!contacts || contacts.length === 0) {
            return res.status(404).json({message: "No Contacts Found"});
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}

const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id: id});
        return res.status(200).json({message: "Contact Deleted Successfully"});
    } catch (error) {
        next(error);
    }
};

//alert
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

//tips
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

const insertTip = async (req, res) => {
    try {
        const data = req.body;

        const tipCreated = await Tip.create(data);

        res
        .status(201).json({
            message: "Tip Insertion Successfull",
            tipId: tipCreated._id.toString()
        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"page not found"})
    }

};

const updateTipById = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const updatedData = await Tip.updateOne(
            {_id: id},
            {$set: updates},
            );
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
}

const deleteTipById = async (req, res) => {
    try {
        const id = req.params.id;
        await Tip.deleteOne({_id: id});
        return res.status(200).json({message: "Tip Deleted Successfully"});
    } catch (error) {
        res.status(400).json({msg: "page not found"});
    }
};

module.exports = { getAllUsers, getUserById, deleteUserById, updateUserById, getAllContacts, deleteContactById, insertAlert, updateAlertById, deleteAlertById, getAllTip, getTipById, deleteTipById, updateTipById, insertTip };