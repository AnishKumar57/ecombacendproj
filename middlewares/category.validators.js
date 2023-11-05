const validateCreate = (req, res, next)=>{
    if(!req.body.name){
        return res.status(400).json({
            message: "category name is missiing,  Please try again with category name",
            success: false,
            err: 'name parameter is missing in the request body' 
        })
    }
    next();
}

const validateUpdate = (req, res, next)=>{
    if(!req.body.name){
        return res.status(400).json({
            message: "category name is missiing,  Please try again with category name",
            success: false,
            err: 'name parameter is missing in the request body' 
        })
    }
    next();
}


module.exports = { 
    validateCreate,
    validateUpdate
 };