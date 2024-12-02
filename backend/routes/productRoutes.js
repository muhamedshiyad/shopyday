import e from "express";
import { createproduct, deleteproduct, getProduct, getproductDetails, updateproduct } from "../controllers/productControllers.js";
import { upload } from "../middlewares/multer.js";
import { mentorAuth } from "../middlewares/mentorAuth.js";
import { adminAuth } from "../middlewares/adminAuth.js";


const router =e.Router();

router.get("/product-list",getProduct);
router.get('/details/:productId',getproductDetails)
router.post('/create',mentorAuth,adminAuth, upload.single('image'),createproduct)
router.put('/update/:productId',mentorAuth,adminAuth,upload.single('image'), updateproduct);
router.delete('/delete:productId', mentorAuth,adminAuth,deleteproduct);

export {router as productRouter}