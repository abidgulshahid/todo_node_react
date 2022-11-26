const todo_table = require("../utils/schema");

exports.update_todo = async  (request, response) => {
    var task_status = {"task_status":request.body.task_status}
     try {
        var done_todo = await todo_table.findByIdAndUpdate(
                {_id:request.params.id},
            task_status
        );
        response.status(200).send(done_todo);
    } catch (error) {
        response.send(error);
     }
}