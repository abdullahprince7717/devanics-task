const sequelize = require("../bin/dbConnection");
const Profile = require("./definitions/profile");

const models = { Profile };

const db = {};

db.sequelize = sequelize;

module.exports = { models, db }; 