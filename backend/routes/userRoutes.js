import e from "express";
import { checkUser, userLogin, userLogout, userProfile, userSignup } from "../controllers/userControllers.js";
import { userAuth } from "../middlewares/userAuth.js";
const router= e.Router();

router.post('/signup',userSignup)
router.post('/login',userLogin)

router.get('/profile',userAuth,userProfile)
router.put('/logout',userAuth ,userLogout )

router.get('/check-user',userAuth ,checkUser)


router.put('/reset-password')
router.put('/profile-update',userAuth,(req,res,next)=>{})
router.delete('/delete-account',userAuth,(req,res,next)=>{})



export {router as userRouter}