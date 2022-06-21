module.exports = function (sequelize, dataTypes){

    let alias = 'Comentarios';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuarioComentador: {
            type: dataTypes.INTEGER
        },
        idProductoComentado: {
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING,
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: 'comentarios',
        timestamps: false,
        underscored: false,
    };
    const comentarioTabla = sequelize.define(alias,cols,config);
    comentarioTabla.associate = function(models){
        comentarioTabla.belongsTo(models.Producto,{
            as : "comentarioProducto",
            foreignKey:"idProductoComentado"
        }),
        comentarioTabla.belongsTo(models.Usuario,{
            as : "comentarioUsuario",
            foreignKey:"idUsuarioComentador"
        })
    }
    return comentarioTabla
};