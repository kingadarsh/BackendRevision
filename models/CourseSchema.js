const mongoose= require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const CourseSchema=new Schema({
    title:{
        type:String,
        unique:true,
        trim:true
    },
    price:{
        type:Number,
        trim:true,
    },
    description:{
        type:String
    },
    creator:ObjectId
});

const CourseModel=mongoose.model('course',CourseSchema);