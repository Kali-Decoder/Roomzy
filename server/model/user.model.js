const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password_hash: { type: String, required: true },
    first_name: { type: String },
    last_name: { type: String },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    date_of_birth: { type: Date },
    profile_picture_url: { type: String },
    bio: { type: String },
    created_at: { type: Date, default: Date.now }
    
});

module.exports = mongoose.model('User', userSchema);
