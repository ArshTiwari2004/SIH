import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    instituteName: { type: String, required: true },
    studentID: { type: String, required: true },
    department: { type: String, required: true },
    yearOfStudy: { type: String, required: true }, // e.g., 1st year, 2nd year
    programOfStudy: { type: String, required: true }, // e.g., B.Tech, M.Sc.
    cgpa: { type: Number }, // optional
    extracurriculars: { type: [String] }, // Array for clubs or activities
    profilePicture: { type: String } // optional, store file path or URL
  });
  
export const Student = mongoose.model('Student', studentSchema);
