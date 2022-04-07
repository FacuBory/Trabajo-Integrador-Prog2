let usuario = require('../db/dat')
let router = require('../routes/users')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
