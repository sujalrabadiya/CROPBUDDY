const Contact = require("../models/contact-model");

const getAllContact = async (req, res) => {
    try {
        const contact = await Contact.find();
        
        res.status(200).json(contact);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({ message: "message send successfully"});
    } catch (error) {
        return res.status(500).json({ message: "message not delivered"});
    }
};

module.exports = {contactForm, getAllContact};