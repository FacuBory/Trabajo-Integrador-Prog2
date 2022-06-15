var express = require('express');
var router = express.Router();
let userControllers = require('../controllers/userControllers')
/* GET users listing. */
router.get('/profile', userControllers.profile);
router.get('/register', userControllers.register);
router.post('/profile', userControllers.procesarRegister);
router.get('/login', userControllers.login);
router.post('/login', userControllers.procesarLogin);
router.get('/edit/profile',userControllers.editar)

module.exports = router;
