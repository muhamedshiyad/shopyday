import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
            maxLenghth:10,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            minLength:3,
            maxLenghth:15,
        },
        password:{
            type:String,
            required:true,
            minLength:6,
            maxLenghth:10,
        },
        mobile:{
            type:String,
            required:true,
        },
        profilePic:{
            type:String,
            default:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
        },       
  },
  { timestamps:true }
  );

export const User = mongoose.model('User',userSchema);