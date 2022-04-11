var express = require('express');
var router = express.Router();
let userRouter = require('../controllers/userControllers')
/* GET users listing. */
router.get('/', userRouter.profile);

module.exports = router;
