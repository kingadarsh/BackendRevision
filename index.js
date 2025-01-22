const express=require("express");
const app = express();
const ConnectToDb=require("./config/db");
const UserModel=require("./models/UserSchema");
const AdminModel=require("./models/AdminSchema");
const CourseModel=require("./models/CourseSchema");
const PurchaseModel=require("./models/PurchaseSchema");
// Importing routes
const UserRouter=require("./routes/user");
const CourseRouter=require("./routes/course");
const AdminRouter=require("./routes/admin");

// Config to dotenv
require("dotenv").config();

//Calling db
ConnectToDb();

// To start the server
app.get("/",(req,res)=>{
    res.send("Server is running");
});


app.use("/app/v1/user",UserRouter);

app.use("/app/v1/course",CourseRouter);

app.use("/app/v1/admin",AdminRouter);



const PORT = process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`Serving on http://localhost:${PORT}`)
})




// mongodb+srv://adarshkathriya:mp5Mz8QpKsAcipzz@coursesellingwebsite.q27lx.mongodb.net/