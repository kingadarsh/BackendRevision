const express=require("express");
const {Router}=express.Router;

const UserRouter=Router();

UserRouter.post("/signup",(req,res)=>{
    res.json({
        message:"Signup"
    })
});

UserRouter.post("/signup",(req,res)=>{
    res.json({
        message:"Signin"
    })
});

UserRouter.get("/purchases",(req,res)=>{
    res.json({
        message:"Your Courses"
    })
});

module.exports=UserRouter;
