const express=require("express");
const {Router}=express.Router;


const CourseRouter=Router();




app.get("/app/v1/course/preview",(req,res)=>{
    res.jsonp({
        message:"All courses"
    })
})


app.post("/app/v1/course/buy",(req,res)=>{
    res.json({
        message:"Buy Here"
    })
})