import express from "express"
import mongoose from "mongoose";
import { User } from "../model/model.js";
const rt1= express.Router();

rt1
.route("/v1")
.get(getfun)
.post(postfun);

function getfun(req,res){
    res.json({
        sucess:"true",

    });
    console.log("Ok get method is connected");
}

async function postfun(req,res){
    const {name,email,gender} = req.body;
    res.json({
        sucess:"Post data is sucessfully",
        

    });

    const isEmail = await User.findOne({ email });
    if(!isEmail){
        const user = await User.create({
            name,
            email,
            gender,
          });
          console.log("Ok Data is Inserted");
    }

    console.log("Ok post method is connected");
}

export default rt1