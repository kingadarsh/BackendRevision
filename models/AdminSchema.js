const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const AdminSchema=new Schema({
    email:{
        type:String,
        required:true,
        lower:true,
        trim:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"]
    },
    password:{
        type:String,
        required:true,
        lower:true,
        trim:true,
        minlength:[3,"Password should be minimum 8 character long"],
    },
    name:{
        type:String,
        required:true,
        lower:true,
        trim:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid name"],
        maxlength:[100,"Name should not be more than 100 characters"]
    }
})

const AdminModel=mongoose.model('admins',AdminSchema);

module.exports=AdminModel;