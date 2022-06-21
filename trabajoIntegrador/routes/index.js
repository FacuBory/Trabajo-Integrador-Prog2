var express = require('express');
var router = express.Router();
let indexControllers = require('../controllers/indexControllers')
/* GET home page. */
router.get('/',indexControllers.index)
router.get('/search-results', indexControllers.search)

module.exports = router;
