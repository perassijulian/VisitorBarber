const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const { 
  modifyUser, 
  deleteUser, 
  getUser,
  getWorker,
  getUsers 
} = require('../controllers/user.js')

const router = require("express").Router();

//GET USER
router.get("/find/:id", verifyTokenAndAuthorization, getUser);

//GET NAME AND PHOTO
router.get("/worker/:id", getWorker);


//GET ALL USER
router.get("/", verifyTokenAndAdmin, getUsers);

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, modifyUser);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

module.exports = router;
