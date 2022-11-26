const express = require("express");
const todo_table = require("../utils/schema");
const router = express.Router();

exports.get_todo = async  (request, response) => {
    console.log("GETTING TODO")
    const get_todo_list = await todo_table.find();
    try {
        response.status(200).send(get_todo_list)

    }
    catch (e) {
        response.status(500).send(e)
        console.log(e)
    }
}