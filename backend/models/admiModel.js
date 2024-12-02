import { Schema, model } from 'mongoose';

const adminSchema = new Schema({
    name : {
        type :String,
        required : true,
    },
    email :{
        type : String,
        required : true,
        unique : true,
    },
    password :{
        type : String,
        required : true,
        minlenght : 8,
    },
    phone :String,
    person:{
        type :Schema.Types.ObjectId,
    },
    role : {
        type : String,
        enum :["mentor","admin"],
        default : "admin",
    }
});

export const Admin = model("Admin",adminSchema);

 