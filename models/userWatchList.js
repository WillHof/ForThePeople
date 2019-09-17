module.exports = function(sequelize, Datatypes){
    const userWatchList = sequelize.define("userWatchList", {
        id:{
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: Datatypes.INTEGER
        },
        congId:{
            type: Datatypes.STRING
        },
        chamber:{
            type:Datatypes.STRING
        }
    }
    )
    return userWatchList
}

