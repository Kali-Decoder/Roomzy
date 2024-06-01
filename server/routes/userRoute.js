import express from "express";
import { registerUser,loginUser,logoutUser,changePassword,getUserProfile,updateUserProfile} from "../controllers/userController.js";
import { setPreferences,getPreferences } from "../controllers/prefrenceController.js";
import { auth } from "../middlewares/auth.js";

const router=express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.put('/changePassword', auth, changePassword);  
router.get('/profile', auth, getUserProfile);
router.put('/profile', auth, updateUserProfile);
router.post('/preferences', auth, setPreferences);
router.get('/preferences', auth, getPreferences);

export default router;