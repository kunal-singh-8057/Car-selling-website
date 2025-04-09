const userModels = require("../Models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRETE = process.env.JWT_SECRETE;


const register = async(req,res)=>{

    const{name,email,password} = req.body

    let user = await userModels.findOne({email})

    if(user) return res.status(404).json("failed")

    const hashpassword = await bcrypt.hash(password,10)

    user = await userModels.create({name,email,password:hashpassword})

    res.status(201).json("success")
}


const login = async(req,res)=>{

    const{email,password} = req.body

    let user = await userModels.findOne({email})

    if(!user) return res.status(404).json("failed")

    const isAuths = bcrypt.compare(password,user.password)

    if(!isAuths) return res.status(404).json("success")

    const token = await jwt.sign({_id:user._id},JWT_SECRETE)

    res.status(201).cookie("token",token,{
        httpOnly:true,
        maxAge:150*60*1000
    }).json("success")

}


const view = async(req,res)=>{
    
    const viewuser = await userModels.find()

    res.status(201).json({
        success:true,
        viewuser
    })
}

const verify = async(req,res)=>{
        
    return res.status(201).json("success")
}


module.exports = {register,login,view,verify}

