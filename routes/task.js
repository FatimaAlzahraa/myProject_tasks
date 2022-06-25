const express = require("express");
const controller = require("../controllers/task");
//const validate = require("../middlewares/validation/posts");
//const sanitize = require("../middlewares/sanitization/posts");

const route = express.Router();

route.get("/getTask", controller.getAll);;
route.delete("/delete:id",  controller.deleteOne);

route.post("/add", controller.addOne);
route.post("/update:id", controller.updateOne);

module.exports = route;