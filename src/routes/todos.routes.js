const { Router } = require("express");
const {
  postUsers,  
  postTasksByUserId,
  getTasksByUserId,
  updateIsCompletedByUserId,
  deleteTasksByUserId
} = require("../controllers/todos.controllers");

const router = Router();

router.post("/users", postUsers);

router.post("/todos", postTasksByUserId);

router.get("/users/:id", getTasksByUserId);

router.put("/todos/:id", updateIsCompletedByUserId);

router.delete("/todos/:id", deleteTasksByUserId);

module.exports = router;