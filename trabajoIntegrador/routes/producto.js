var express = require('express');
var router = express.Router();
let productoControllers = require('../controllers/productoControllers')
/* GET home page. */
router.get('/product-add',productoControllers.info)
router.get('/detalle/:id',productoControllers.detalleProducto)
router.get('/users/register', productoControllers.create);

router.post('/users/register', productoControllers.store);


module.exports = router;