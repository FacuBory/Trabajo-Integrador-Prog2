

module.exports = function (sequelize, dataTypes) {

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
        },
        idUsuario: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'producto',
        timestamps: false,
        underscored: false,
    };

    const productoTabla = sequelize.define(alias, cols, config);

    productoTabla.associate = function (models) {
        productoTabla.belongsTo(models.Usuario, {
            as: "productoUsuario",
            foreignKey: "id"
        }),
        productoTabla.hasMany(models.Comentarios,{
            as: "productoComentarios",
            foreignKey: "id"
        })
    }

    return productoTabla
};
