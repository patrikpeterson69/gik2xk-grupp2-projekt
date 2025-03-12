const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.get('/', getProducts); // Hämta alla produkter
router.get('/:id', getProductById); // Hämta en specifik produkt
router.post('/', createProduct); // Skapa en ny produkt (kräver admin)
router.put('/:id', updateProduct); // Uppdatera en produkt (kräver admin)
router.delete('/:id', deleteProduct); // Ta bort en produkt (kräver admin)

module.exports = router;
