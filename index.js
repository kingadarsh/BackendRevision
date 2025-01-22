const express=require("express");
const app = express();

const UserRouter=require("./routes/user");
const CourseRouter=require("./routes/course");
const AdminRouter=require("./routes/admin");


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