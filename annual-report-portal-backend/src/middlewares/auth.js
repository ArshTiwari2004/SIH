import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
export const isAuthenticated = async(req,res,next)=>{
    const {token} = req.cookies;

    if (!token) {
        return res.status(404).json({
            success:false,
            message: "Login first",
        });
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);
    next();
}