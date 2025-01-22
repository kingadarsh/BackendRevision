const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
            "Please enter a valid email address"],
    },
    password:{
        type:String,
        requires:true,
        trim:true,
        minlength:[3,"Password must contains atleast 8 character"],
        maxlength:[28,"Password must not exceed 28 characters"],
    },
    name:{
        type:String,
        trim:true,
        minlength:[3,"Name must contains atleast 5 character"],
        maxlength:[100,"Name must not exceed 100 character"],
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Name must contain only alphabets"]
    }
});

const UserModel=mongoose.model('users',UserSchema);

module.exports=UserModel;