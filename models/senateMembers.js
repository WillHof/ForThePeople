module.exports = function (sequelize, DataTypes) {
    const SenateMembers = sequelize.define("Senate_Members", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        firstname: {
            type: DataTypes.STRING,
            trim: true,
        },
        lastname: {
            type: DataTypes.STRING,
            trim: true,
        },
        firstname: {
            type: DataTypes.STRING,
            trim: true,
        },
        birthdate: {
            type: DataTypes.STRING,
            trim: true,
        },
        gender: {
            type: DataTypes.STRING,
            trim: true,
        },
        party: {
            type: DataTypes.STRING,
            trim: true,
        },
        twitter: {
            type: DataTypes.STRING,
            trim: true,
        },
        facebook: {
            type: DataTypes.STRING,
            trim: true,
        },
        youtube: {
            type: DataTypes.STRING,
            trim: true,
        },
        website: {
            type: DataTypes.STRING,
            trim: true,
        },
        contact: {
            type: DataTypes.STRING,
            trim: true,
        },
        nextelection: {
            type: DataTypes.STRING,
            trim: true,
        },
        state:
        {
            type: DataTypes.STRING,
            trim: true,
        },
        title: {
            type: DataTypes.STRING,
            trim: true,
        },
    })
    return SenateMembers
}