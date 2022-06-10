module.exports = function (sequelize, dataTypes){

    let alias = 'Usuario';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        contraseña: {
            type: dataTypes.STRING,
            allowNull: false
        },
        fechaNacimiento: {
            type: dataTypes.DATE,
            allowNull: false
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        fotoPerfil: {
            type: dataTypes.STRING,
        },
        seguidores: {
            type: dataTypes.INTEGER
        },
        comentarios: {
            type: dataTypes.INTEGER
        },
        productosSubidos: {
            type: dataTypes.INTEGER
        }
    };
    
    let config = {};
    
}