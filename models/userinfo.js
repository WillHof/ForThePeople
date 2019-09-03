module.exports = function (sequelize, Datatypes) {
    const userinfo = sequelize.define("userinfo", {
        username: {
            type: Datatypes.STRING,
            trim: true
        },
        password: {
            type: Datatypes.STRING,
            trim: true
        }
    }
    )
    return userinfo
}