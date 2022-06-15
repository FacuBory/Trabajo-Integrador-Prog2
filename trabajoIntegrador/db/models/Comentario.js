module.exports = function (sequelize, dataTypes){

    let alias = 'Comentario';

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
        tableName: 'comentario',
        timestamps: false,
        underscored: true,
    };
    const comentarioTabla = sequelize.define(alias,cols,config);
    return comentarioTabla
};