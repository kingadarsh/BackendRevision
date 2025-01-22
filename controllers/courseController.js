const CourseRouter = require("../routes/course")

function previewCourses(req,res){
    res.jsonp({
        message:"All courses"
    })
}

function buyedCourses(req,res){
    res.json({
        message:"Buy Here"
    })
}

module.exports={
    previewCourses:previewCourses,
    buyedCourses:buyedCourses
}