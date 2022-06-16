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
        tipo_producto: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        comentarios: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'producto',
        timestamps: true,
        underscored: true,
    };
    
    const productoTabla = sequelize.define(alias,cols,config);
    return productoTabla
};
