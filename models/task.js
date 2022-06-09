const mongoose = require('mongoose');


const task = mongoose.Schema({
    name :{
        type: String,
        trim:true,
        required: true,
        maxLength:[20,"Length cannot be more then 20 characters."]
    },
    completed:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Tasks",task);

