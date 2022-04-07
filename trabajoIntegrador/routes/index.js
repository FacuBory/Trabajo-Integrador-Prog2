var express = require('express');
var router = express.Router();
let indexRouter = require('../controllers/indexControllers')
/* GET home page. */
router.get('/', indexRouter.index);

module.exports = router;
