import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    instituteName: { type: String, required: true },
    employeeId: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true }, // e.g., Assistant Professor, Lecturer
    yearsOfExperience: { type: Number, required: true },
    publications: { type: [String] }, // optional
    coursesTaught: { type: [String] }, // optional
    profilePicture: { type: String } // optional, store file path or URL
  });
  
export const Faculty = mongoose.model('Faculty', facultySchema);