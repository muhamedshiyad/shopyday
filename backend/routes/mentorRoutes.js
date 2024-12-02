import e from "express";
import { checkmentor, mentorLogin, mentorLogout, mentorProfile, mentorSignup } from "../controllers/mentorControllers.js";
import { mentorAuth } from "../middlewares/mentorAuth.js";

const router= e.Router();

router.post('/signup',mentorSignup)
router.post('/login',mentorLogin)
router.put('/logout',mentorAuth, mentorLogout)
router.get('/profile',mentorAuth,mentorProfile)
router.get('/check-user',mentorAuth,checkmentor)
router.put('/reset-password')
router.put('/profile-update')
router.delete('/delete-account',(req,res,next)=>{})

router.get('/fetch-userList')
router.get('/fetch-mentors')


export {router as mentorRouter}