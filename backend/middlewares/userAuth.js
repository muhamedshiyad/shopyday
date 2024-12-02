import jwt from "jsonwebtoken";

export const userAuth = (req,res,next)=>{
    try {
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({message: "Unauthorized: No token provided"});
        }

        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if(!tokenDecoded){
            return res.status(401).json({message:"user not authorized"});
        }

        req.user = tokenDecoded;

        next();

    } catch (error) {
        return res.status(500).json({ message: "internal server error"});
        
    }
};