const AdminRouter=require("../routes/admin");
const { handleUserSignin } = require("./usersController");

function handleAdminSignup(req,res){
    res.send("Admin Signup!! ");
}

function handleAdminSignin(req,res){
    res.send("Admin Signup!! ");
}

function adminCourses(req,res){
    res.send("Admin Signup!! ");
}

module.exports={
    handleAdminSignup:handleAdminSignup,
    handleUserSignin:handleUserSignin,
    adminCourses:adminCourses
}