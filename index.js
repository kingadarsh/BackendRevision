const express=require("express");
const app = express();

const UserRouter=require("./routes/user");

app.get("/",(req,res)=>{
    res.send("Server is running");
});


app.use("/user",UserRouter);






const PORT = process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`Serving on http://localhost:${PORT}`)
})