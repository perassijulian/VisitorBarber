const mongoose = require("mongoose");

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
    },
    averageCostBarber: {
        type: Number,
    },
    profilePicture: {
        type: String,
        //required: true
    },
    showcasePictures: {
        type: Array,
        //required: true
    }
}, 
{ 
  timestamp: true
});

module.exports = mongoose.model("Worker", workerSchema);