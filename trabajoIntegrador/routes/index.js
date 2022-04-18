var express = require('express');
var router = express.Router();
let indexRouter = require('../controllers/indexControllers')
/* GET home page. */
router.get('/index', indexRouter.index);
router.get('/search-results', )

module.exports = router;
