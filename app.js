const express = require('express');
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
const app = express();
const port = 3000;
app.use(express.static("./public"))
app.use(express.json())
app.use('/api/v1/tasks',tasks);






const start = async ()=>{
    try {
       await connectDB(process.env.DB_URI);
        app.listen(port,console.log(`app is listening at port ${port}`));
    } catch (error) {
        console.log(error);
    }
}
start();
