import mongoose from "mongoose";

export const dbconnect = (app)=>{
    mongoose.connect("mongodb://127.0.0.1:27017",
        {
            dbName:"login"
        }
    )
    .then(()=>{
        console.log("Ok database is also connected");
        
    })
    .catch((err)=>{
        console.log("error is occured ",err);
    });
};