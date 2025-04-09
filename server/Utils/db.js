const mongoose = require("mongoose");
const MONGODB = process.env.MONGODB;

const connectDB = ()=>{
    try {
        mongoose.connect(`${MONGODB}`)
        .then(()=>{
            console.log("Database connected successfully")
        }).catch(()=>{
            console.log("Database connection failed")
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;