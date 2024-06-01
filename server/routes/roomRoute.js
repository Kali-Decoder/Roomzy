import express from "express";
import { auth } from "../middlewares/auth";
import { createRoom,getAllRooms,getRoomById,updateRoom,deleteRoom } from "../controllers/roomController";

const router=express.Router();

router.post('/', auth, createRoom);
router.get('/', auth, getAllRooms);
router.get('/:id', auth, getRoomById);
router.put('/:id', auth, updateRoom);
router.delete('/:id', auth, deleteRoom);

export default router;