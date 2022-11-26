const todo_table = require("../utils/schema");

exports.update_todo = async  (request, response) => {
    console.log("HELLO WORLD")
    task_status = {"task_status":true}
     try {
        var done_todo = await todo_table.findByIdAndUpdate(
                {_id:request.params.id},
            task_status
        );
        response.send(done_todo);
    } catch (error) {
        response.send(error);
     }
}