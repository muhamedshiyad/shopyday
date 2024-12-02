import { Schema as _Schema, model } from 'mongoose';

const orderSchema = new _Schema({
    title : {
        type : String,
        required : true,
        unique : true,
    },
    duration : {
        type : String,
        required : true,
    },
    Image:{
        type :String,
        default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOvguP9JE8MXMpzupOA0BDLAOS5uSeBqTIA&s",
    },
    description : {
        type : String,
        minlenght : 50,
        maxlenght : 500,
    },
    price : Number,
    id : {
        type : Schema.Types.ObjectId,
    },
});

const Order = model("Order",orderSchema);

export default{Order};