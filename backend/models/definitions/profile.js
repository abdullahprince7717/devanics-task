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
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        website: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        numberOfHires: {
            type: DataTypes.BIGINT(),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        phone: {
            type: DataTypes.BIGINT(),
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        zip: {
            type: DataTypes.BIGINT(),
            allowNull: false,
        },
        vatNumber: {
            type: DataTypes.BIGINT(),
            allowNull: false,
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Profile",
})

module.exports = Profile;