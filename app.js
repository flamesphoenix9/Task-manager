const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
// Middleware
app.use(express.static("./public"));
app.use(express.json());

//Routes

app.use("/api/v1/tasks", tasks);

app.get("/", (req, res) => {
  res.send("Task Manager");
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`listenoing at port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
