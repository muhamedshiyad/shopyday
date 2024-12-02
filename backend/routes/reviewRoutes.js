import e from "express";
import { userAuth } from "../middlewares/userAuth.js";
import { addReview, deleteReview, getAverageRating, getproductReviews } from "../controllers/reviewControllers.js";

const router =e.Router();

router.post("/addreview",userAuth,addReview)
router.get("/getproductreviews/:productId",userAuth,getproductReviews)
//router.get("/getuserreviews",userAuth)
router.delete('/deletereview/:reviewId',userAuth,deleteReview)
router.get('/getavgrating/:productId',userAuth,getAverageRating)

export {router as reviewRouter}
