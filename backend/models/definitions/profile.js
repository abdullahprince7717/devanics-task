const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Profile extends Model { }

Profile.init(
    {
        profileId: {
            primaryKey: true,
            type: DataTypes.STRING(255),
        },
        companyLogo: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        companyName: {
            type: DataTypes.STRING(34),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(90),
            allowNull: true,
        },
        website: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
        numberOfHires: {
            type: DataTypes.STRING(34),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(34),
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(34),
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING(34),
            allowNull: false,
        },
        zip: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
        vatNumber: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Profile",
})

module.exports = Profile;