const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task_name: {
        type: String,
        required: true,
    },
    task_description: {
        type: String,
        required: true,
    },
    task_status: {
        type: Boolean,
        default: false,
    },

},
{timestamp:true}
);

module.exports = mongoose.model("task", taskSchema);