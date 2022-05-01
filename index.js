const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const cors = require("cors");

//ROUTES IMPORT
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

//CONNECTION TO DATABASE
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
});

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

//STATIC FILES TO SERVE HEROKU
app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

//BACKEND SERVER LISTENER
app.listen(process.env.PORT || 3001, () => {
    console.log("Backend server is running!");
});