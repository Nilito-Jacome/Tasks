const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Todos = db.define("todos", {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(100),
    },    
    IsCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },    
  },
  {
    timestamps: false,
  }
);
module.exports = Todos;