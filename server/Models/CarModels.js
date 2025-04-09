const mongoose = require("mongoose");


const carschema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    price:{
        type:String,
        required:true
    },

    img:{
        type:String,
        required:true
    },
});


const carModles = mongoose.model("cardata",carschema);
module.exports = carModles;