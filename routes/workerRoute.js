const router = require("express").Router();

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const { 
    signupWorker,
    getAllWorkers, 
    getWorkerInfo, 
    modifyWorkerInfo, 
    deleteWorkerInfo 
} = require('../controllers/workerControllers.js');

//verifyTokenAndAuthorization missing
router.post('/signup', verifyToken, signupWorker);
// router.get('/get-all', getAllWorkers)
router.get('/my-account', verifyToken, getWorkerInfo);
router.put('/my-account', verifyTokenAndAuthorization, modifyWorkerInfo);
router.delete('/my-account', verifyTokenAndAuthorization, deleteWorkerInfo);

module.exports = router;