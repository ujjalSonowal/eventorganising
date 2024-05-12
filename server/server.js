const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userrouter = require("./routes/userRoute");
const organiserouter = require("./routes/organiserRoute");
const eventsrouter = require("./routes/eventRoute");
const commentrouter = require("./routes/postcomment");
const bookingrouter = require("./routes/bookingRoute");
const serviceRouter = require("./routes/postservices");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json()); // middleware
app.use(cors());

app.use("/user", userrouter);
app.use("/organise", organiserouter);
app.use("/events", eventsrouter);
app.use("/comment", commentrouter);
app.use("/service", serviceRouter);
app.use("/booking", bookingrouter);

// const url =
//   "mongodb+srv://135ujjalsonowal:9JonUyI7QfXWqyLl@eventorganising.08cgxvg.mongodb.net/?retryWrites=true&w=majority";

const url =
  "mongodb+srv://nitulsonowal8133:nitul12345@events.6io85z4.mongodb.net/?retryWrites=true&w=majority";
// const url =
// "mongodb+srv://ujjalsonowal:Ujjalsonowal234@programorganizer.sfkbswh.mongodb.net/?retryWrites=true&w=majority&appName=programorganizer";

// Connect to MongoDB ------------------------------
mongoose
  .connect(url)
  .then(() => {
    app.listen(port, () => {
      console.log(`app running in port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
