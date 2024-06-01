import User from '../model/user.model.js';
import sendTokenResponse from '../utils/jwtToken.js';
import { ErrorHandler } from '../utils/errorHandler.js';

export const registerUser = async (req, res, next) => {
  const { username, email, password, first_name, last_name, gender, date_of_birth, profile_picture_url, bio } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return next(new ErrorHandler(400, 'User already exists with this email'));
    }

    const user = await User.create({
      username,
      email,
      password_hash: password,
      first_name,
      last_name,
      gender,
      date_of_birth,
      profile_picture_url,
      bio,
    });

    sendTokenResponse(user, 201, res);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
  
    // Check if email and password were provided
    if (!email || !password) {
      return next(new ErrorHandler(400, 'Please provide email and password'));
    }
  
    try {
      // Find user by email
      const user = await User.findOne({ email }).select('+password_hash');
  
      if (!user) {
        return next(new ErrorHandler(401, 'Invalid email or password'));
      }
  
      // Check if password matches
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return next(new ErrorHandler(401, 'Invalid email or password'));
      }
  
      // If matched, send token response
      sendTokenResponse(user, 200, res);
    } catch (error) {
      next(error);
    }
  };

  export const logoutUser = async (req, res, next) => {
    try {
      res.clearCookie("token");
  
      res
        .status(200)
        .json({ success: true, message: "User logged out successfully" });
    } catch (error) {
      next(error);
    }
  };


export const changePassword = async (req, res, next) => {
    const { currentPassword, newPassword, confirmNewPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmNewPassword) {
    return next(new ErrorHandler(400, 'Please provide current and new password'));
  }

  try {
    const user = await User.findById(req.user.id).select('+password_hash');

    if (!user) {
      return next(new ErrorHandler(404, 'User not found'));
    }

    // Check if current password matches
    const isMatch = await user.matchPassword(currentPassword);

    if (!isMatch) {
      return next(new ErrorHandler(401, 'Current password is incorrect'));
    }

    if (newPassword !== confirmNewPassword) {
        throw new ErrorHandler(
          400,
          "New password and confirm password do not match"
        );
      }

    // Update password
    user.password_hash = newPassword;

    await user.save();

    // Send new token
    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};

export const getUserProfile = async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
  
      if (!user) {
        return next(new ErrorHandler(404, 'User not found'));
      }
  
      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      next(error);
    }
  };

  export const updateUserProfile = async (req, res, next) => {
    try {
      const user = await User.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
        runValidators: true
      });
  
      if (!user) {
        return next(new ErrorHandler(404, 'User not found'));
      }
  
      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      next(error);
    }
  };




