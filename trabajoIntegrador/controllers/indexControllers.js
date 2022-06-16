const db = require('../database/models');
const Producto = db.producto;


const indexController = {
  index: (req, res) => {

    let counter = req.session.contador;
    if (counter != undefined) {
      counter += 1
    } else {
      counter = 1;
    }

    req.session.contador = counter;


    db.Producto.findAll()
      .then((result) => {
        return res.render("products", {
          listaProductos: result,
          contador: req.session.contador
        })

      .catch(error =>{
        return res.send(error)
      })
        
      });
     
    },
  
}
  


module.exports = indexController;