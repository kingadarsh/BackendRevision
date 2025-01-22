const UserRouter=require("../routes/user");

function handleUserSignup(req,res){
    res.json({
        message:"Signup"
    })
}

function handleUserSignin(req,res){
    res.json({
        message:"Signin"
    })
}

function coursePurchasedByUser(req,res){
    res.json({
        message:"Your Courses"
    })
}

module.exports={
    handleUserSignup:handleUserSignup,
    handleUserSignin:handleUserSignin,
    coursePurchasedByUser:coursePurchasedByUser
}