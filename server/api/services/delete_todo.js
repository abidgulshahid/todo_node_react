const express = require("express");
const todo_table = require("../utils/schema");
const router = express.Router();

exports.delete_todo = async  (request, response) => {
    const delete_todo = await todo_table.findByIdAndDelete(request.params.id);
    try {
        response.status(200).send(delete_todo)
        console.log("Todo Deleted")

    }
    catch (e) {
        response.status(500).send(e)
        console.log(e)
    }
}