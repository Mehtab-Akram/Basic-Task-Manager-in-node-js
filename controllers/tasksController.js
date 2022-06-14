const mongoose = require('mongoose')
const Task  = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../error/customError')
const getAllTasks = asyncWrapper( async (req,res)=>{
    const tasks = await Task.find({});
    res.status(200).json({tasks});    
})

const getTask = asyncWrapper(async (req,res,next)=>{
        const {id:taskId} = req.params
        const task = await Task.findOne({_id : taskId})
        if(!task)
        {
            return next(createCustomError(`Task not found with ID : ${taskId}`,404));
        }
        res.status(200).json({task});
})

const createTask = asyncWrapper( async (req,res)=>{
     const task = await Task.create(req.body);
        res.status(201).json({task})
})

const updateTask = asyncWrapper( async (req,res,next)=>{
        const{id:taskId} = req.params
        const task = await Task.findOneAndUpdate({_id: taskId},req.body,{
            runValidators: true,
            new: true 
        });
        if(!task){
            return next( new createCustomError(`Task not found with ID : ${taskId}`,404));
        }
        res.status(201).json({task})  
})

const deleteTask = asyncWrapper( async (req,res)=>{
        const{id:taskId} = req.params
        const task = await Task.findOneAndDelete({_id: taskId});
        res.status(201).json({task})
})


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}

