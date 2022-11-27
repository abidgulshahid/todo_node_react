const express = require("express");
const todo_table = require("../utils/schema");
const {json} = require("express");
const router = express.Router();

exports.done_count = async  (request, response) => {
    const total_done_count = await todo_table.countDocuments({'task_status':true});
    const total_task_done= total_done_count.toLocaleString()
    try {
        response.status(200).send(total_task_done)

    }
    catch (e) {
        response.status(500).send(e)
        console.log(e)
    }
}