import e from "express";
import { userAuth } from "../middlewares/userAuth.js";
import {addTocart, getcart, removecart, updatecart, } from "../controllers/cartControllers.js";
const router = e.Router();

router.post("/add-to-cart",userAuth,addTocart);
router.get("/get-cart", userAuth, getcart);
router.get("/get-cartItems", userAuth,updatecart);
router.delete("/remove-product",userAuth,removecart);

export { router as cartRouter };