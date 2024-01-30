const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("note", {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        isDelete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, { timestamps: false })
}