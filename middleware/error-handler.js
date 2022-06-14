const {CustomError} = require('../error/customError')

const handleError = (err,req,res,next)=>{

    console.log(err)
    if(err instanceof CustomError){
        return res.status(err.status).json({msg: err.message})
    }
    res.status(500).json("Something went wrong, please try again later.")
}

module.exports = handleError