var express = require('express');
var router = express.Router();
let userControllers = require('../controllers/userControllers')

/* requerir modulos de multer y path */
let multer = require('multer');
let path = require ('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination : function(req,file, cb) {
        cb(null, path.join(__dirname, '../public/images/users'))
    },
    filename : function(req,file, cb) {
        /* facu.png */
         /*    name campoDelForm   -    16062022        .png */
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
let upload = multer({ storage : storage});

/* GET users listing. */
router.get('/profile/:id', userControllers.profile);

router.get('/register', userControllers.register);
router.post('/register', upload.single('fotoDePerfil'), userControllers.procesarRegister);

router.get('/login', userControllers.login);
router.post('/login', userControllers.procesarLogin);

router.post('/logout', userControllers.logout);

router.get('/profile-edit/:id',userControllers.editar)
router.post('/profile-edit/:id',upload.single('fotoDePerfil'),userControllers.update)

router.get('/profile-follow/:id',userControllers.follow)

module.exports = router;
