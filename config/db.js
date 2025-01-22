const mongoose=require("mongoose");
require("dotenv").config();

async function ConnectToDb(){
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to the database");
    }

    catch(error){
        console.log("There was a problem connecting to the database",error);
    }

}

module.exports=ConnectToDb;