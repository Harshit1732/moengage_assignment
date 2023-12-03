const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const cors = require("cors");

const userRoute= require("./routes/authroute.js")
const productroute= require('./routes/productroute.js')

dotenv.config();
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
// PORT
const PORT = process.env.PORT || 8080;
// rest api's

// app.use("/user",user)
app.get("/", (req, res) => {
  res.send("Welcome to server help (backend)");
});

app.use('/auth', userRoute)
app.use('/',productroute)
app.listen(process.env.PORT, async () => {
  try {
    await connectDB();
    console.log(
      `Database connected and listening to http://localhost:${process.env.PORT}`
    );
  } catch (err) {
    console.log(err);
    console.log("App is not listening");
  }
});
