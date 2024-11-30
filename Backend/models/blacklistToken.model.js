const mongoose=require('mongoose');

const blackListSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400//24 hoursa in seconds
    }
});

module.exports=mongoose.model('BlasklistToken',blackListSchema);