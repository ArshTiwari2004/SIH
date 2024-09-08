import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {sendCookie} from "../utils/sendCookie.js"

export const registerUser = async (req, res) => {
    const { email, password,role } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists...'
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            email,
            password: hashedPassword,
            role,
        });

        await newUser.save();

        const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, {
            expiresIn: '1h'
          });

        res.status(201).json({ message: "User registered successfully !",
            token,
            user:{
                id:newUser._id,
                username:newUser.username,
                role: newUser.role
            }
         })
    } catch (error) {
        res.status(500).json({ message: "Internal Server error ! " });
    }
};


// improved login api
export const loginUser = async (req, res, next) => {
    const { email, password, role } = req.body;

    try {
        const user = await User.findOne({ email, role });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Invalid email/password/role'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(404).json({
                success: false,
                message: 'Invalid email/password or role'
            });
        }

        sendCookie(user, res, 'Login Successful', 200);
    } catch (error) {
        next(error); // Forward the error to the error handling middleware
    }
}

// export const loginUser = async (req, res) => { // previous login api that i made 
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }
//         const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
//             expiresIn: '1h'
//         });
//         res.status(200).json({
//             token,
//             user: {
//               id: user._id,
//               username: user.username,
//               email: user.email,
//               role: user.role
//             }
//           });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// }


// Logout API
export const logout = (req,res)=>{
    res.status(200).cookie("token","",{
        expires: new Date(Date.now()),
    }).json({
        success:true,
        message: "Logged Out !"
       })
}

// testing API
export const home = (req, res) => {
    res.send("Ayo ")
} 