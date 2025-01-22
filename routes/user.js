const {Router}=require("express");
const UserRouter=Router();
const {handleUserSignup, handleUserSignin, coursePurchasedByUser}=require("../controllers/usersController")

UserRouter.post("/signup",handleUserSignup);

UserRouter.post("/signup",handleUserSignin);

UserRouter.get("/purchases",coursePurchasedByUser);

module.exports=UserRouter;
