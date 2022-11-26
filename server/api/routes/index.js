const express = require("express");
const task_create = require("../services/create_todo");
const get_todo = require("../services/get_todo_list");
const delete_todo = require("../services/delete_todo");
const todo_done = require("../services/update_todo")
const router = express.Router();

router.post("/create",task_create.todo_create);
router.get('/get_todo',get_todo.get_todo);
router.put("/update/:id",todo_done.update_todo);
router.delete("/:id", delete_todo.delete_todo);
module.exports = router;
