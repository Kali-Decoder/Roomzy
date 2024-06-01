import Preference from "../model/preference.model";
import { ErrorHandler } from "../utils/errorHandler";

export const setPreferences = async (req, res, next) => {
    try {
      const preference = await Preference.create({ ...req.body, user_id: req.user.id });
  
      res.status(201).json({
        success: true,
        data: preference
      });
    } catch (error) {
      next(error);
    }
  };

  export const getPreferences = async (req, res, next) => {
    try {
      const preferences = await Preference.findOne({ user_id: req.user.id });
  
      if (!preferences) {
        return next(new ErrorHandler(404, 'Preferences not found'));
      }
  
      res.status(200).json({
        success: true,
        data: preferences
      });
    } catch (error) {
      next(error);
    }
  };

  