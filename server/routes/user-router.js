const express = require("express");
const router = express.Router();
const usercontrollers = require("../controllers/user-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router.route('/plant').get(authMiddleware, usercontrollers.getAllPlant);
router.route('/plant/:id').get(authMiddleware, usercontrollers.getPlantById);
router.route('/plant/update/:id').put(authMiddleware, usercontrollers.updatePlantById);
router.route('/plant/delete/:id').delete(authMiddleware, usercontrollers.deletePlantById);
router.route("/plant/insert").post(authMiddleware, usercontrollers.insertPlant);

router.route('/waterUsage').get(authMiddleware, usercontrollers.getAllWaterUsage);
router.route('/waterUsage/:id').get(authMiddleware, usercontrollers.getWaterUsageById);
router.route('/waterUsage/update/:id').put(authMiddleware, usercontrollers.updateWaterUsageById);
router.route('/waterUsage/delete/:id').delete(authMiddleware, usercontrollers.deleteWaterUsageById);
router.route("/waterUsage/insert").post(authMiddleware, usercontrollers.insertWaterUsage);

router.route('/alert').get(authMiddleware, usercontrollers.getAllAlert);
router.route('/alert/:id').get(authMiddleware, usercontrollers.getAlertById);

router.route('/tip').get(authMiddleware, usercontrollers.getAllTip);
router.route('/tip/:id').get(authMiddleware, usercontrollers.getTipById);

router.route('/weather/:city').get(authMiddleware, usercontrollers.getWeather);

router.route('/soilMoistureReading/:plantId').get(authMiddleware, usercontrollers.getSoilMoistureReading);
router.route('/soilMoistureReading/update/:id').put(authMiddleware, usercontrollers.updateSoilMoistureReadingById);
router.route('/soilMoistureReading/delete/:id').delete(authMiddleware, usercontrollers.deletePlantById);
router.route("/soilMoistureReading/insert").post(authMiddleware, usercontrollers.insertSoilMoistureReading);


module.exports = router;