import {Router} from "express"
import { home, loginUser, logout, registerUser } from "../controllers/userControllers.js";


const router = Router();

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get("/logout",logout);

//test api for seeing if server working or not..
router.get("/",home);

export default router;