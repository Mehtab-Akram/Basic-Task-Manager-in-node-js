const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
app.use(express.static('./public'))
app.use(express.json());
app.use('/api/v1/tasks',tasks);
const port = 3000;

const start = ()=>{
    try {
        connectDB(process.env.DB_URI);
    app.listen(port, console.log(`Server is listening at port ${3000}`));
    } catch (error) {
        console.log(error)
    }
}

start();