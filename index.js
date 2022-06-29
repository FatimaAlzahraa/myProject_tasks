

const postsRouter = require("./routes/task");
const path = require("path");
const db = require("./config/db");
const express = require('express')
//const contTask=rquire('./controllers/task')


const app = express()
const port = process.env.port || 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.use("/tasks",postsRouter);

  const errMiddleware = (err, req, res, next) => {
    res.status(400).json({ err: err });
  };
  app.use(errMiddleware);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })