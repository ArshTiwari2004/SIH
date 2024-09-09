import { Student } from "../models/Student.js";
import { Faculty } from "../models/Faculty.js";
import { Admin } from "../models/Admin.js";
import { SuperAdmin } from "../models/superAdmin.js";

export const registerSuperAdmin = async (req, res) => {
    try {
        const { name, phoneNumber, instituteName, roleDescription, department, yearsOfExperience, instituteAddress, profilePicture, superAdminCode, permissions } = req.body;

        const newSuperAdmin = new SuperAdmin({
            name,

            phoneNumber,
            instituteName,
            roleDescription,
            department,
            yearsOfExperience,
            instituteAddress,
            profilePicture,
            superAdminCode,
            permissions
        });

        await newSuperAdmin.save();
        res.status(201).json({ message: 'Super Admin registered successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register Super Admin' });
    }
};

export const registerAdmin = async (req, res) => {
    try {
        const { name, phoneNumber, instituteName, roleDescription, department, yearsOfExperience, instituteAddress, profilePicture, adminCode, permissions } = req.body;

        const newAdmin = new Admin({
            name,

            phoneNumber,
            instituteName,
            roleDescription,
            department,
            yearsOfExperience,
            instituteAddress,
            profilePicture,
            adminCode,
            permissions
        });

        await newAdmin.save();
        res.status(201).json({ message: 'Admin registered successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register Admin' });
    }
};

export const registerStudent = async (req, res) => {
    try {
        const { name, phoneNumber, instituteName, studentID, department, yearOfStudy, programOfStudy, cgpa, extracurriculars, profilePicture } = req.body;

        const newStudent = new Student({
            name,

            phoneNumber,
            instituteName,
            studentID,
            department,
            yearOfStudy,
            programOfStudy,
            cgpa,
            extracurriculars,
            profilePicture
        });

        await newStudent.save();
        res.status(201).json({ message: 'Student registered successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register Student' });
    }
};

export const registerFaculty = async (req, res) => {
    try {
        const { name, phoneNumber, instituteName, employeeId, department, designation, yearsOfExperience, publications, coursesTaught, profilePicture } = req.body;

        const newFaculty = new Faculty({
            name,
            phoneNumber,
            instituteName,
            employeeId,
            department,
            designation,
            yearsOfExperience,
            publications,
            coursesTaught,
            profilePicture
        });

        await newFaculty.save();
        res.status(201).json({ message: 'Faculty registered successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register Faculty' });
    }
};