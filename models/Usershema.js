const mongoose = require('mongoose');

Schema=mongoose.Schema;
const userSchema= new Schema({
    name:String,
    email:{
           type:String,
           require:true
    },
    password:String
})
module.exports=mongoose.model("user",userSchema)