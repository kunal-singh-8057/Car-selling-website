const jwt = require("jsonwebtoken");
const JWT_SECRETE = process.env.JWT_SECRETE;

const verifyusers = async(req,res,next)=>{

const token = await req.cookies.token

if(!token) return res.status(201).json("fialed")

const decode = await jwt.verify(token,JWT_SECRETE)

next();

}


module.exports = verifyusers;