import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    const { username, email, password, role, institution, collegeName, universityName, department, designation, contactNumber, address, additionalInfo } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists...'
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role,
            institution,
            collegeName,
            universityName,
            department,
            designation,
            contactNumber,
            address,
            additionalInfo
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
            }
         })
    } catch (error) {
        res.status(500).json({ message: "Internal Server error ! " });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        res.status(200).json({
            token,
            user: {
              id: user._id,
              username: user.username,
              email: user.email,
              role: user.role
            }
          });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}


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