const express = require("express");
const controller = require("../controllers/task");
const validate = require("../middlewares/validation/task");
const sanitize = require("../middlewares/sanitization/task");

const route = express.Router();

route.get("/", controller.getAll);;
route.delete("/:id",validate.deleteOne,  controller.deleteOne);

route.post("/", sanitize.addOne, validate.addOne, controller.addOne);
route.patch("/:id",sanitize.updateOne,validate.updateOne, controller.updateOne);

module.exports = route;