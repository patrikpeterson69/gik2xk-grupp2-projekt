const express = require('express');
const router = express.Router();
const { createOrder, getUserOrders, getAllOrders, updateOrderStatus } = require('../controllers/orderController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

router.post('/', verifyToken, createOrder); // Skapa en ny beställning
router.get('/', verifyToken, getUserOrders); // Hämta beställningar för en användare
router.get('/all', verifyToken, isAdmin, getAllOrders); // Hämta alla beställningar (endast admin)
router.put('/:id/status', verifyToken, isAdmin, updateOrderStatus); // Uppdatera orderstatus (endast admin)

module.exports = router;
