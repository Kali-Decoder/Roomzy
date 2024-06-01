import express from "express";
import { auth } from "../middlewares/auth.js";
import { createRoom,getAllRooms,getRoomById,updateRoom,deleteRoom } from "../controllers/roomController.js";

const router=express.Router();

router.post('/create', auth, createRoom);
router.get('/', auth, getAllRooms);
router.get('/:id', auth, getRoomById);
router.put('/:id', auth, updateRoom);
router.delete('/:id', auth, deleteRoom);

export default router;