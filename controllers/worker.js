const Worker = require('../models/worker.js');

const registerWorker = async (req, res, next) => {  
    const { 
      birthday, 
      dayAvailable, 
      timeAvailable, 
      profilePicture, 
      barber, 
      hairdresser, 
      averageCostHairdress, 
      averageCostBarber,
      showcasePictures 
    } = req.body;


    //ADD THIS AGAIN WHEN WORKING
    //probably with require at model solves this
    // if ( !birthday || !dayAvailable || !timeAvailable || !profilePicture ) {
    //   res.status(400);
    //   throw new Error('Please add all fields');
    // }
  
    //this is a goog one
    // if ( !barber && !hairdresser ) {
    //   res.status(400);
    //   throw new Error('Please select your profession');
    // }
  
    //Check if user exist
    // const userExists = await User.findOne({username})
  
    // if (!userExists) {
    //   res.status(400);
    //   throw new Error('First create user');
    // }
  
    const alreadyWorker = await Worker.findOne({user: req.user.id})
  
    if (alreadyWorker) {
      res.status(400).json('User already have a worker profile!');
    } else {
      const worker = await Worker.create({
        ...req.body,
        user: req.user.id,
      });
      res.status(201).json(worker)
    }
};

const getWorker = async ( req, res, next ) => {
  try {
    const workerInfo = await Worker.find({ user: req.params.id });
    res.status(200).json(workerInfo);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getWorkers = async (req,res, next) => {
  try {
    const workers = await Worker.find();
    res.status(200).json(workers)
  } catch (err) {
    res.status(500).json(err);
  }
};

const modifyWorker = async (req, res, next ) => {
  try {
    const updatedWorker = await Worker.findOneAndUpdate(
      { user: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedWorker);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteWorker = async (req, res, next ) => {
  try {
    await Worker.findOneAndDelete({ user: req.params.id })
    res.status(200).json("Worker info has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { 
  registerWorker,
  getWorker, 
  getWorkers,
  modifyWorker, 
  deleteWorker, 
 }