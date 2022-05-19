const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const { 
  modifyUser, 
  deleteUser, 
  getUser, 
  getUsers 
} = require('../controllers/user.js')

const router = require("express").Router();

//GET USER
router.get("/find/:id", verifyTokenAndAuthorization, getUser);

//GET ALL USER
router.get("/", verifyTokenAndAdmin, getUsers);

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, modifyUser);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

module.exports = router;
