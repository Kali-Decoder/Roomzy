import express from "express";
import { registerUser,loginUser,logoutUser,changePassword } from "../controllers/userController.js";
import { auth } from "../middlewares/auth";

const router=express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.put('/changePassword', auth, changePassword);  

export default router;