const mongoose = require('mongoose');

const amenitySchema = new mongoose.Schema({
    room_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    amenities: {
        type: [String],
        enum: [
            'TV', 'Fridge', 'Kitchen', 'Wifi', 
            'Washing Machine', 'AC', 'Parking'
        ]
    }
});

module.exports = mongoose.model('Amenity', amenitySchema);
