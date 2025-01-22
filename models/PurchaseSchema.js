const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const PurchaseSchema=new Schema({
    userId:ObjectId,
    creatorId:ObjectId
});

const PurchaseModel=mongoose.model('purchases',PurchaseSchema);

module.exports=PurchaseModel;