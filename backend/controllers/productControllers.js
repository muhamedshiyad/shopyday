import { cloudinaryInstance } from "../config/cloudinary.js";
import { Product } from "../models/productModel.js";


export const createproduct = async (req, res, next) => {
    try {
        const { title, description, price, duration, image, mentor } = req.body;

        const mentorId = req.user.id;

        if (!title || !description || !price || !duration) {
           // return res.status(400).json({message:"all field required"});
        }
        
        console.log(req.file ,'======req.file');

        const imageUrl = (await cloudinaryInstance.uploader.upload(req.file.path)).url;
        
         const productData = new Product({ title, description, price, duration, image:imageUrl, mentor:mentorId });
         await productData.save();

         return res.json({ message: "product data fetched", data: productData });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};
export  const updateproduct = async (req, res, next) => {
    try {
        const { productId } = req.params;

        const { title, description, duration, price, mentor } = req.body;
        let imageUrl;

        const isProductExist = await Product.findOne({ _id: productId });

        if (!isProductExist) {
            return res.status(400).json({ success: false, message: "product does not exist" });
        }

        if (req.file) {
            imageUrl = await handleImageUpload(req.file.path);
        }

        const updatedProduct = await Product.findOneAndUpdate(
            { _id: productId },
            { title, description, duration, price, mentor, image : imageUrl },
            { new: true }
        );

        res.status(200).json({ success: true, message: "course updated successfully", data: updatedProduct });
    } catch (error) {
        next(error);
    }
};
export const deleteproduct = async (req,res,next)=>{
    try {
        const {productId} = req.params;

        const productDelelted = await Product.findByIdAndDelete({_id :productId });

        if(!productDelelted)res.status(400).json({success: true, message:"product already deleted" });

        res.status(200).json({ success : true, message:"product delete successfully",data : productDelelted});
    } catch (error) {
        next(error)
    }
};
export const getProduct = async (req, res, next) => {
    try {
        const Products = await Product.find();

        res.status(200).json({ success: true, message: "products fetched", data: Products });
    } catch (error) {
        next(error);
    }
};
export const getproductDetails = async (req, res, next) => {
    try {

        const {productId}=req.params;

        const ProductDetails = await Product.findById(productId);

        res.status(200).json({ success: true, message: "product fetched", data: ProductDetails });
    } catch (error) {
        next(error);
    }
};