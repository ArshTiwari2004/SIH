import mongoose from "mongoose";

const superAdminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    instituteName: { type: String, required: true },
    roleDescription: { type: String, required: true }, // e.g., Director, Principal
    department: { type: String }, // if applicable
    yearsOfExperience: { type: Number, required: true },
    instituteAddress: { type: String, required: true },
    profilePicture: { type: String }, // store file path or URL
    permissions: { type: [String] } // Array to store various permissions
  });
  
export const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);