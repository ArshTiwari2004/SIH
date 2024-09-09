import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    instituteName: { type: String, required: true },
    roleDescription: { type: String, required: true }, // e.g., Head of Department, Registrar
    department: { type: String, required: true },
    yearsOfExperience: { type: Number, required: true },
    instituteAddress: { type: String, required: true },
    profilePicture: { type: String }, // store file path or URL
    adminCode: { type: String }, // optional
    permissions: { type: [String] } // Array to store specific permissions
  });
  
export const Admin = mongoose.model('Admin', adminSchema);
