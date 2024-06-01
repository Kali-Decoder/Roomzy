import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  members_max: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip_code: { type: String, required: true },
  country: { type: String, required: true },
  price: { type: Number, required: true },
  available_from: { type: Date },
  available_to: { type: Date },
  preferences: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Preference' }],
  amenities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Amenity' }],
  created_at: { type: Date, default: Date.now },
});

const Room = mongoose.model('Room', roomSchema);

export default Room;
