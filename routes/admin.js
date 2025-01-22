const {Router}=require("express");
const {handleAdminSignup,handleUserSignin,adminCourses}=require("../controllers/adminController")
const AdminRouter=Router();


AdminRouter.post("/signup",handleAdminSignup);

AdminRouter.post("/signin",handleUserSignin);

AdminRouter.get("/courses",adminCourses);



module.exports=AdminRouter;