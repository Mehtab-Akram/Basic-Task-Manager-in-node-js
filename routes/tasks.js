const express = require('express');
const {getAllTasks,getTask,createTask,updateTask,deleteTask} = require('../controller/tasksController')
const router = express.Router();


router.route("/").get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = router;