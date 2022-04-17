var express = require('express');
var router = express.Router();
let userRouter = require('../controllers/userControllers')
/* GET users listing. */
router.get('/profile', userRouter.profile);
router.get('/register', userRouter.register);
router.get('/login', userRouter.login);
router.get('/edit/profile',userRouter.editar)

module.exports = router;
