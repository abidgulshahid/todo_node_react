const express = require("express");
const todo_table = require("../utils/schema");
const router = express.Router();

exports.todo_create = async  (request, response) => {
    try {
        const task = await new todo_table(request.body).save();
        response.send(task)
        console.log("New Todo Item added")
    }
    catch (e) {
        response.status(500).send("Something Wrong")
        console.log(e)

    }
}