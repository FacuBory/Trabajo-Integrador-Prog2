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
        tableName: 'seguidores',
        timestamps: false,
        underscored: false,
    };
    const seguidorTabla = sequelize.define(alias,cols,config);
    
    seguidorTabla.associate = function(models){
        seguidorTabla.belongsTo(models.Usuario,{
            as : "seguidorUsuario",
            foreignKey:"idUsuarioSeguidor"
        })
    }
    return seguidorTabla
};