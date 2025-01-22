const {Router}=require("express");
const {previewCourses,buyedCourses}=require("../controllers/courseController")
const CourseRouter=Router();

CourseRouter.get("/preview",previewCourses);


CourseRouter.post("/buy",buyedCourses);

module.exports=CourseRouter;