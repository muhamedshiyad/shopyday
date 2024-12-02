import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            minLength:5,
            maxLength:30,
            unique:true,
        },
        description:{
            type:String,
            required:true,
            minLength:5,
            maxLength:100,
        },
        price:{
            type:Number,
            required:true,
        },
        duration:{
            type:String,
            required:true,
        },
        image:{
            type:String,
            default:"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081",
        },
        mentor:{ type:mongoose.Types.ObjectId,ref: "Mentor"},
    },
    {timestamps:true}
);

export const Product = mongoose.model("Product",productSchema);