const express = require("express");
const router = express.Router();
const contactcontroller = require("../controllers/contact-controller");

router.route("/contact").post(contactcontroller.contactForm);
router.route("/show").get(contactcontroller.getAllContact);
 
module.exports = router;