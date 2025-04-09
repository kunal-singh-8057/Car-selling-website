const carModels = require("../Models/CarModels");

const addcars = async(req,res)=>{
    
    await carModels.create(req.body)
    res.status(201).json("success")
}

const viewcars = async(req,res)=>{
    await carModels.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}

module.exports = {addcars,viewcars}