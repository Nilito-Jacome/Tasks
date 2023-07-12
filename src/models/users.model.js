const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Users = db.define("users", {
    firstname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
  },
  {
    timestamps: false,
  }
);
module.exports = Users;