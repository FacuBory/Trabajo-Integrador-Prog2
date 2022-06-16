module.exports = function (sequelize, dataTypes){

    let alias = 'Seguidor';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuarioSeguidor: {
            type: dataTypes.INTEGER
        },
        idUsuarioSeguido: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'seguidor',
        timestamps: false,
        underscored: true,
    };
    const seguidorTabla = sequelize.define(alias,cols,config);
    return seguidorTabla
};