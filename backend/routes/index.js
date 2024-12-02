import e from "express";
import { userRouter } from "./userRoutes.js";
import { mentorRouter } from "./mentorRoutes.js";
import { productRouter } from "./productRoutes.js";
import { reviewRouter } from "./reviewRoutes.js";
import { cartRouter } from "./cartRoutes.js";
import { adminRouter } from "./adminRoutes.js";

const router = e.Router()

router.use('/admin',adminRouter)
router.use('/user',userRouter)
router.use('/mentor',mentorRouter)
router.use('/product',productRouter)
router.use('/review',reviewRouter)
router.use('/cart',cartRouter)


export { router as apiRouter }