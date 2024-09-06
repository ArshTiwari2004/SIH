import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [ 'admin', 'student', 'faculty'], 
        default: 'student'
    },
    institution: String,
    collegeName: String,
    universityName: String,
    department: String,
    designation: String,
    contactNumber: String,
    address: String,
    additionalInfo: String,
},{
    timestamps:true,
});

export const User = mongoose.model("User",userSchema);
