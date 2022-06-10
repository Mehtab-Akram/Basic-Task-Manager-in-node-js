const mongoose = require('mongoose');

const connectDB =  async (url)=>{
   await mongoose.connect(url);
}

module.exports = connectDB;


// const Task = mongoose.Schema(
//     {
//         name:{
//             type: String,
//             required: true,
//             trim: true,
//             maxLength: [20,"Name cannot be more then 20 characters."]
//         }
//     }
// )