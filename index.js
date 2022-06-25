

const postsRouter = require("./routes/task");
const path = require("path");
const db = require("./config/db");
const express = require('express')
//const contTask=rquire('./controllers/task')


const app = express()
const port = 3000
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.use("/tasks",postsRouter);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })