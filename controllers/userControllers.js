import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';

import User from '../models/user.js';
import Worker from '../models/worker.js';

export const getUser = async (req,res) => {
    const users = await User.find({})
    res.status(200).json(users)
}

export const signupUser = asyncHandler(async (req, res, next) => {
  const { name, username, password, worker } = req.body;

  if ( !name || !username || !password ) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  //Check if user exist
  const userExists = await User.findOne({username})

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  
  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(
    password,
    salt
  );

  //Create user
  const user = await User.create({
    name,
    username,
    password: hashedPassword,
    worker,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      username: user.username,
      worker: user.worker,
      token: generateToken(user._id)
    })
  } else {
    res.status(400);
    throw new Error('Invalid user data')
  }
});

export const loginUser = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;

    const user = await User.findOne({username});

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(201).json({
//we just need the token, maybe take other stuff out later
        _id: user.id,
        name: user.name,
        username: user.username,
        token: generateToken(user._id)
      })
    } else {
      res.status(400);
      throw new Error('Invalid credentials')
    }
});

export const logoutUser = asyncHandler(async ( req, res, next ) => {
    if (req.session) {
      req.session.destroy();
      res.clearCookie('session-id');
      res.redirect('/');
    }
    else {
      var err = new Error('You are not logged in!');
      err.status = 403;
      next(err);
    }
});

export const getMyAccount = asyncHandler(async ( req, res, next ) => {

    console.log('userController getMyAccount')
    res.status(200).json(req.user);
});

const generateToken = (id) => {
  return jwt.sign( {id}, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })
}