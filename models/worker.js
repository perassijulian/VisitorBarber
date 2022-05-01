import mongoose from "mongoose";

const workerSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    birthday: {
        type: String,
        required: true
    },
    barber: {
        type: Boolean,
        required: true
    },
    hairdresser: {
        type: Boolean,
        required: true
    },
    dayAvailable: {
        type: String,
        required: true
    },
    timeAvailable: {
        type: String,
        required: true
    },
    averageCostHairdress: {
        type: Number,
        required: true
    },
    averageCostBarber: {
        type: Number,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
}, 
{ 
  timestamp: true
});

export default mongoose.model('Worker', workerSchema);