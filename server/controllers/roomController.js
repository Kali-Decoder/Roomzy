import Room from "../model/room.model.js";
import User from "../model/user.model.js";
import { ErrorHandler } from '../utils/errorHandler.js';

export const createRoom = async (req, res, next) => {
  try {
    console.log("createRoom")
    const room = await Room.create({
      ...req.body,
      user_id: req.user.id,
      preferences: req.user.preferences,
    });

    res.status(201).json({
      success: true,
      data: room
    });
  } catch (error) {
    next(error);
  }
};

export const getAllRooms = async (req, res, next) => {
    try {
      const rooms = await Room.find();
  
      res.status(200).json({
        success: true,
        data: rooms
      });
    } catch (error) {
      next(error);
    }
  };

  export const getRoomById = async (req, res, next) => {
    try {
      const room = await Room.findById(req.params.id);
  
      if (!room) {
        return next(new ErrorHandler(404, 'Room not found'));
      }
  
      res.status(200).json({
        success: true,
        data: room
      });
    } catch (error) {
      next(error);
    }
  };

  export const updateRoom = async (req, res, next) => {
    try {
      const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
  
      if (!room) {
        return next(new ErrorHandler(404, 'Room not found'));
      }
  
      res.status(200).json({
        success: true,
        data: room
      });
    } catch (error) {
      next(error);
    }
  };

  export const deleteRoom = async (req, res, next) => {
    try {
      const room = await Room.findByIdAndDelete(req.params.id);
  
      if (!room) {
        return next(new ErrorHandler(404, 'Room not found'));
      }
  
      res.status(200).json({
        success: true,
        data: {}
      });
    } catch (error) {
      next(error);
    }
  };