var express = require('express');
var router = express.Router();
let productoControllers = require('../controllers/productoControllers')

/* requerir modulos de multer y path */
let multer = require('multer');
let path = require ('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination : function(req,file, cb) {
        cb(null, path.join(__dirname, '../public/images/products'))
    },
    filename : function(req,file, cb) {
        /* facu.png */
         /*    name campoDelForm   -    16062022        .png */
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
let upload = multer({ storage : storage});

/* GET home page. */
router.get('/product-add',productoControllers.info);
router.get('/detalle/:id',productoControllers.show);

router.get('/product-add', productoControllers.create);
router.post('/product-add',upload.single('fotoProducto'), productoControllers.store);

router.get('/product-edit/:id', productoControllers.edit);
router.post('/product-edit/:id', upload.single('fotoProducto'), productoControllers.update);
router.get('/product-delete/:id', productoControllers.delete);


router.post('/product-comment/:id',productoControllers.comment);

module.exports = router;