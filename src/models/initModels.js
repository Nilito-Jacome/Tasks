//TODO Importar todos los modelos
const Categories = require('./categories.model');
const Todos = require('./todos.model');
const Users = require('./users.model');



const initModels = () => {

//****users - todos***/
  Todos.belongsTo(Users), {foreignKey: 'userId'};
  Users.hasMany(Todos), {foreignKey: 'userId'};
//****todos - Categories***/
  Todos.belongsTo(Categories), {foreignKey: 'categoryId'};
  Categories.hasMany(Todos), {foreignKey: 'categoryId'};
};
  module.exports = initModels;