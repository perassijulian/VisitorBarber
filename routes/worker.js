const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const { 
    registerWorker,
    getWorker, 
    getWorkers, 
    modifyWorker, 
    deleteWorker 
} = require('../controllers/workerControllers.js');

const router = require("express").Router();

//REGISTER
router.post('/register', verifyToken, registerWorker);

//GET WORKER
//id is from User and NOT from worker
router.get('/find/:id', getWorker);

//GET ALL WORKERS
router.get("/", getWorkers);

//UPDATE
//id is from User and NOT from worker
router.put('/:id', verifyTokenAndAuthorization, modifyWorker);

//DELETE
//id is from User and NOT from worker
router.delete('/:id', verifyTokenAndAuthorization, deleteWorker);

module.exports = router;