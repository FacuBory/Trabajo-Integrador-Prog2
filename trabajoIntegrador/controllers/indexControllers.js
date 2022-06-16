const db = require('../database/models');
const Producto = db.Producto;


const indexController = {
  findAll: (req, res) => {

    let counter = req.session.contador;
    if (counter != undefined) {
      counter += 1
    } else {
      counter = 1;
    }

    req.session.contador = counter;


    Producto
    findAll()
      .then((result) => {
        return res.render("products", {
          listaProductos: result,
          contador: req.session.contador
        })
        
      });
     
    },
  
}
  


module.exports = indexController;