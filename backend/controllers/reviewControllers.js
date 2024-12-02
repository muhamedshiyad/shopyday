import { Product } from "../models/productModel.js";
import { Review } from "../models/reviewModel.js";

export const addReview = async (req, res) => {
    try {
        const { productId, rating, comment } = req.body;
        const userId = req.user.id;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const review = await Review.findOneAndUpdate({ userId, productId }, { rating, comment }, { new: true, upsert: true });


        res.status(201).json({message:"review created successfully",data:review});
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const getproductReviews = async (req,res) => {
    try {
        const { productId } = req.params;

        const reviews = await Review.find({ productId }).populate("userId","name").sort({ createdAt:-1 });

        if(!reviews.length){
            return res.status(404).json({ message:"No reviews found for this product"});
        }
        res.status(200).json({message:"review fetched successfully",data:reviews});
    } catch (error) {
        res.status(500).json({ message:"Internal sever error",error});
    }
};
export const deleteReview = async (req, res) => {
    try {
        
        const { reviewId } = req.params;
        const userId = req.user.id;

        const review = await Review.findOneAndDelete({ _id: reviewId, userId });

        if (!review) {
            return res.status(404).json({ message: "Review not found or not authorized" });
        }

        res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const getAverageRating = async (req, res) => {
    try {
        const { productId } = req.params;

        const reviews = await Review.find({ productId });
        if (!reviews.length) {
            return res.status(404).json({ message: "No reviews found for this course" });
        }

        const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

        res.status(200).json({message:"average review fetched",data:averageRating });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

