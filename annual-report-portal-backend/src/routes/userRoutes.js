import {Router} from "express"
import { home, loginUser, logout, registerUser } from "../controllers/userControllers.js";
import { registerAdmin, registerFaculty, registerStudent, registerSuperAdmin } from "../controllers/RegisterWithRoles.js";


const router = Router();

router.post('/register',registerUser);
router.post('/register/super-admin',registerSuperAdmin);
router.post('/register/admin',registerAdmin);
router.post('/register/student',registerStudent);
router.post('/register/faculty',registerFaculty);
router.post('/login',loginUser);
router.get("/logout",logout);

//test api for seeing if server working or not..
router.get("/",home);

export default router;