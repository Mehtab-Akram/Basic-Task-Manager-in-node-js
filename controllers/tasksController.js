const mongoose = require('mongoose')
const Task  = require('../models/task')

const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        
    }
}

const getTask = async (req,res)=>{
    try {
        const {id:taskId} = req.params
        const task = await Task.findOne({_id : taskId})
        if(!task)
        {
            res.status(404).json({msg:`Task not found with ID : ${taskId}`})
        }
        res.status(200).json({task});
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        
    }
}

const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:`An error occured on the server side. Please try again later.`})
    }
    
}

const updateTask = async (req,res)=>{
    try {
        const{id:taskId} = req.params
        const task = await Task.findOneAndUpdate({_id: taskId},req.body,{
            runValidators: true,
            new: true 
        });
        if(!task){
            return res.status(404).json({msg: `Task not found against Id : ${taskId}`})
        }
        res.status(201).json({task})
    } catch (error) {
        res.send(500).json({msg:`An error occured on the server side. Please try again later.`})
    }
}

const deleteTask = async (req,res)=>{
    try {
        const{id:taskId} = req.params
        const task = await Task.findOneAndDelete({_id: taskId});
        res.status(201).json({task})
    } catch (error) {
        res.send(500).json({msg:`An error occured on the server side. Please try again later.`})
    }
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}

