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
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING,
            allowNull: false
        },
        fechaNacimiento: {
            type: dataTypes.DATE
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
    
    let config = {
        tableName: 'usuario',
        timestamps:false,
        underscored:false,
    };
    const usuarioTabla = sequelize.define(alias,cols,config)

    usuarioTabla.associate = function(models){
        usuarioTabla.hasMany(models.Producto,{
            as : "usuarioProducto",
            foreignKey:"idUsuario"
        }),
        usuarioTabla.hasMany(models.Comentarios,{
            as : "usuarioComentarios",
            foreignKey:"idUsuarioComentador"
        }),
        usuarioTabla.hasMany(models.Seguidor,{
            as: "usuarioSeguidor",
            foreignKey:"idUsuarioSeguido"
        })
    }
    return usuarioTabla
}

