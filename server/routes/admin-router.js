const express = require('express');
const admincontroller = require('../controllers/admin-controller');
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require('../middlewares/admin-middleware');

const router = express.Router();

router.route('/users').get(authMiddleware, adminMiddleware, admincontroller.getAllUsers);
router.route('/users/:id').get(authMiddleware, adminMiddleware, admincontroller.getUserById);
router.route('/users/update/:id').put(authMiddleware, adminMiddleware, admincontroller.updateUserById);
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, admincontroller.deleteUserById);

router.route('/contacts').get(authMiddleware, adminMiddleware, admincontroller.getAllContacts);
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, admincontroller.deleteContactById);

router.route('/alert/insert').put(authMiddleware, adminMiddleware, admincontroller.insertAlert);
router.route('/alert/update/:id').put(authMiddleware, adminMiddleware, admincontroller.updateAlertById);
router.route('/alert/delete/:id').delete(authMiddleware, adminMiddleware, admincontroller.deleteAlertById);

router.route('/tip').get(authMiddleware, adminMiddleware, admincontroller.getAllTip);
router.route('/tip/:id').get(authMiddleware, adminMiddleware, admincontroller.getTipById);
router.route('/tip/insert').put(authMiddleware, adminMiddleware, admincontroller.insertTip);
router.route('/tip/update/:id').put(authMiddleware, adminMiddleware, admincontroller.updateTipById);
router.route('/tip/delete/:id').delete(authMiddleware, adminMiddleware, admincontroller.deleteTipById);

module.exports = router;