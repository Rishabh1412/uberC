const express=require('express');
const router=express.Router();
const { getCoordinates }=require('../controllers/maps.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const { query }=require('express-validator');


router.get('/get-coordinates',
    query('address').isString().isLength({min:3})
    ,authMiddleware.authUser,getCoordinates

)

module.exports=router;