const Tasks = require('../models/task')

const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Tasks.find({})
        res.status(200).json({tasks})
        
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const getTask = async (req,res) => {
    try {
        const {id: taskID} = req.params
        const task = await Tasks.findOne({_id : taskID})
        if(!task)
            return res.status(404).json({msg:`Task not found with ID ${taskID}`})

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res)=>{
   try {
       console.log(req.body)
       const task = await Tasks.create(req.body);
       res.status(201).json({task})
   } catch (error) {
       console.log(error)
       res.status(500).json({msg:error})
   }   
}
const deleteTask = async (req,res) => {
    try {
        
        const {id: taskID} = req.params;
        const task = await Tasks.findOneAndDelete({_id:taskID})
        if(!task){
            return  res.status(404).json({msg: `Task not found with ID : ${taskID}`});
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const updateTask = async (req,res)=>{
    try {
        const {id: taskID} = req.params

        const task = await Tasks.findOneAndUpdate({_id:taskID},req.body,{
            new: true, // If this is not set we will get the old values and not the new updated values. 
            runValidators: true //If this is not set validators that we have set in schema would not run. 
                                //e.g if we pass empty value it will be stored as empty even though we have set the validator in schema for it. 
        })
        if(!task){
            return res.status(404).json({msg:`Task not found with ID : ${taskID}`})
        }

        res.status(200).json({id:taskID,data:task})    
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}