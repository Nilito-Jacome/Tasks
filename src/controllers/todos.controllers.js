const Users = require("../models/users.model");
const Todos = require('../models/todos.model')
const Categories = require('../models/categories.model')

//***CREATE_USERS***/
const postUsers = async (req, res) => {
  try {
    const {firstname, lastname, email, password} = req.body;
    await Users.create({firstname, lastname, email, password});
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};
//***BUSCAR_TASKS_CAGTEGORY***/
const postTasksByUserId = async (req, res) => { 
  try {
    const { title, categoryId, userId } = req.body;
    await Todos.create(     
      { title, categoryId, userId }, 
    );
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};
//***BUSCAR_TASKS_CAGTEGORY***/
const getTasksByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne({
      where: {id},
      attributes: {
        exclude: ["password"],
      },
      include: {
        model: Todos,
        attributes: {
        exclude: ["userId", "categoryId"],
        },  
        include: {
          model: Categories,                                 
        }                 
      },                  
    });
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};
//***ACTUALIZAR_ESTADO_ISCOMPLETED***/
const updateIsCompletedByUserId = async(req, res) => {
  try {
    const { id } = req.params;
    const { todoId, IsCompleted} = req.body;
    const todo = await Todos.update(
      { todoId, IsCompleted },
      {
        where: {id},
        include: {
          model:Todos,
          attributes:{IsCompleted}
        }
      }
    );
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};         
//***DELETE_TASKS***/
const deleteTasksByUserId = async(req, res) => {
try {
  const { id } = req.params;
  await Todos.destroy({
    where: { id },
  });
  res.status(204).send();
}catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  postUsers,
  postTasksByUserId,
  getTasksByUserId,  
  updateIsCompletedByUserId,
  deleteTasksByUserId
};
