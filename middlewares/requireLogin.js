const User = require('../model/UserModel')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const {SECRET_KEY}=require('../config/keys')

module.exports={
    requireLogin(req,res,next){
        console.log("entered",req.body);
        let {courseName} = req.body

        // console.log(courseName,"dfghbhbhnn");
        let {authorization}=req.headers
        // console.log(req.headers,"qyyyyyyyy");
        if(!authorization){
            return res.status(401).json({
                error:"You must be logged in"
            })
        }
        const token=authorization.split(' ')[1]
        // console.log(token,"token");
        
        jwt.verify(token,"SECRET_KEY",(err,payload)=>{
            if(err){
                return res.status(401).json({
                    error:"You must be logged in"
                })
            }
            let {_id}=payload
            User.findById({_id})
            .then(userData=>{
                req.user=userData
                console.log(req.user)
                next()
            })
        })
    }
}