var express = require('express');
var router = express.Router();
let productoControllers = require('../controllers/productoControllers')
/* GET home page. */
router.get('/product-add',productoControllers.info)
router.get('/detalle/:id',productoControllers.detalleProducto)

router.get('/detalle/:id',productoControllers.show)

router.get('/product-add', productoControllers.create);
router.post('/product-add', productoControllers.store);


module.exports = router;