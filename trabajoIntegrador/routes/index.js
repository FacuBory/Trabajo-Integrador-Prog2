var express = require('express');
var router = express.Router();
let indexControllers = require('../controllers/indexControllers')
/* GET home page. */
router.get('/',indexControllers.Producto)
router.get('/search-results',)

module.exports = router;
