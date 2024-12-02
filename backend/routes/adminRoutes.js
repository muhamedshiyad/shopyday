import { Router } from 'express';
import { adminLogin, adminLogout, adminProfile, adminSignup, checkadmin } from '../controllers/adminControllers.js';
import { adminAuth } from '../middlewares/adminAuth.js';
import { getProduct } from '../controllers/productControllers.js';


const router =Router();

router.post('/signup',adminSignup);
router.post('/login',adminLogin );
router.post('/logout',adminLogout );

router.get('/profile',adminAuth, adminProfile );
router.put('/update', );
router.delete('/delete', );

router.get("/userList");
router.get("/check-admin",adminAuth,checkadmin)

router.get("/some-end-point",adminAuth);
router.get("/product-list",getProduct);

export { router as adminRouter };