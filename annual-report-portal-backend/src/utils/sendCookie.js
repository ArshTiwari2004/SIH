import jwt from "jsonwebtoken"

export const sendCookie = (user,res, message , statusCode = 200)=>{
    // Making a random token for cookie
    const token = jwt.sign({_id: user._id},process.env.JWT_SECRET);

    res.status(statusCode).cookie("token",token, {
        httpOnly: true,
        maxAge : 60*60*1000, // cookie expire time
        sameSite: "lax" ,
        secure: false 
    }).json({
        success:true,
        message,
    });

}