const express = require('express');
const router = express.Router();
const { addToCart, getCart, removeFromCart } = require('../controllers/cartController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.post('/add', verifyToken, addToCart); // Lägg till en produkt i varukorgen
router.get('/', verifyToken, getCart); // Hämta användarens varukorg
router.delete('/remove/:id', verifyToken, removeFromCart); // Ta bort en produkt från varukorgen

module.exports = router;
