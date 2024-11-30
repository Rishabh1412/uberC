const express=require('express');
const router=express.Router();
const { body }=require('express-validator');

router.post('/register',[
    req.body
])

module.exports=router;