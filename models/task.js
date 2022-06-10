const mongoose = require('mongoose')

const Task = mongoose.Schema({
    name :{
        type: String,
        required: true,
        trim: true,
        maxLength: [20,`Length can not be more then 20 characters.`]
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Task",Task);