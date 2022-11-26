//const mongoose = require("mongoose");
//
//const Schema = mongoose.Schema;
//
//const schema_blueprint = new Schema({
//    id : {type:Number},
//    name : {type:String}
//});
//
//const todo_table = mongoose.model("todo", schema_blueprint)
//
//module.exports = todo_table


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("task", taskSchema);