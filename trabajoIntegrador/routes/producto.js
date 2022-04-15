var express = require('express');
var router = express.Router();
let productoRouter = require('../controllers/productoControllers')
/* GET home page. */
router.get('/product-add',productoRouter.info)

module.exports = router;