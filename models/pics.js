module.exports = function (sequelize, DataTypes) {
    const pics = sequelize.define("Pictures", {
        path: {
            type: DataTypes.STRING
        },
        houseRef: {
            type: DataTypes.STRING,
            references: {
                model: 'house_members',
                key: 'id'
            }
        },
        senateRef: {
            type: DataTypes.STRING,
            references: {
                model: 'senate_members',
                key: 'id'
            }
        }
    });
    return pics
}