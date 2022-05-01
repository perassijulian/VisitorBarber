import express from 'express';

const workerRoute = express.Router();

import { signupWorker, getWorkerInfo, modifyWorkerInfo, deleteWorkerInfo } from '../controllers/workerControllers.js';

import { protect } from '../middleware/authMiddleware.js';
//I'm not being able to set Authorization header correctly

//workerRoute.route('/my-account').get(getWorkerInfo).put(modifyWorkerInfo).delete(deleteWorkerInfo)
//Should work if code below is working. But first check that

workerRoute.post('/signup', protect, signupWorker);
workerRoute.get('/my-account', protect, getWorkerInfo);
workerRoute.put('/my-account', protect, modifyWorkerInfo);
workerRoute.delete('/my-account', protect, deleteWorkerInfo);

export { workerRoute }