const express = require("express");
const router = express.Router();
const usercontrollers = require("../controllers/user-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router.route('/plant').get(authMiddleware, usercontrollers.getAllPlant);
router.route('/plant/:id').get(authMiddleware, usercontrollers.getPlantById);
router.route('/plant/update/:id').put(authMiddleware, usercontrollers.updatePlantById);
router.route('/plant/delete/:id').delete(authMiddleware, usercontrollers.deletePlantById);
router.route("/plant/insertPlant").post(authMiddleware, usercontrollers.insertPlant);


module.exports = router;