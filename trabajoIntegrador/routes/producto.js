var express = require('express');
var router = express.Router();
let productoControllers = require('../controllers/productoControllers')
/* GET home page. */
router.get('/product-add',productoControllers.info)
router.get('/detalle/:id',productoControllers.show)

router.get('/product-add', productoControllers.create);
router.post('/product-add', productoControllers.store);

router.get('/product-edit/:id', productoControllers.edit)
router.post('/product-edit/:id', productoControllers.update)
router.get('/product-delete/:id', productoControllers.delete)


router.post('/product-comment/:id',productoControllers.comment)

module.exports = router;