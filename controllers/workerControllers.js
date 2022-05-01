import asyncHandler from 'express-async-handler';
import Worker from '../models/worker.js';
import User from '../models/user.js';


export const signupWorker = asyncHandler(async (req, res, next) => {

    console.log('workerControllers signupWorker', req.body)
  
    const { birthday, dayAvailable, timeAvailable, profilePicture, barber, hairdresser, averageCostHairdress, averageCostBarber } = req.body;
  
    if ( !birthday || !dayAvailable || !timeAvailable || !profilePicture ) {
      res.status(400);
      throw new Error('Please add all fields');
    }
  
    if ( !barber && !hairdresser ) {
      res.status(400);
      throw new Error('Please select your profession');
    }
  
    //Check if user exist
    // const userExists = await User.findOne({username})
  
    // if (!userExists) {
    //   res.status(400);
    //   throw new Error('First create user');
    // }
  
  
    //Create worker data
    const worker = await Worker.create({
      user: req.user.id,
      birthday: req.body.birthday,
      barber,
      hairdresser,
      dayAvailable,
      timeAvailable,
      averageCostHairdress,
      averageCostBarber,
      profilePicture,
    });
  
    // if (worker) {
      res.status(201).json(worker)
    // } else {
    //   res.status(400);
    //   throw new Error('Invalid user data')
    // }
});

export const getWorkerInfo = asyncHandler(async ( req, res, next ) => {
  const workerInfo = await Worker.find({ user: req.user.id });
  console.log('workerController getWorkerInfo', workerInfo)
  res.status(200).json(workerInfo);

});

export const modifyWorkerInfo = asyncHandler(async (req, res, next ) => {
  res.status(200).json({message: 'modifyWorkerInfo'})
});

export const deleteWorkerInfo = asyncHandler(async (req, res, next ) => {
  res.status(200).json({message: 'deleteWorkerInfo'})

});