const router = require("express").Router();

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const { 
    signupWorker, 
    getWorkerInfo, 
    modifyWorkerInfo, 
    deleteWorkerInfo 
} = require('../controllers/workerControllers.js');

//verifyTokenAndAuthorization missing
router.post('/signup', signupWorker);
router.get('/my-account', getWorkerInfo);
router.put('/my-account', verifyTokenAndAuthorization, modifyWorkerInfo);
router.delete('/my-account', verifyTokenAndAuthorization, deleteWorkerInfo);

module.exports = router;