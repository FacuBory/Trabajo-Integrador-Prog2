module.exports = function (sequelize, dataTypes){

    let alias = 'Producto';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        img: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        marca: {
            type: dataTypes.STRING
        },
        condicion: {
            type: dataTypes.STRING
        },
        tipoProducto: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updateAt: {
            type: dataTypes.DATE
        },
        comentarios: {
            type: dataTypes.INTEGER
        }
    };

    let config = {};
    
}