const ObjectId = require("mongoose").Types.ObjectId;

const rules = {
  id: (req, res, next) => {
    const isValid = ObjectId.isValid(req.params.id);
    if (isValid) {
      next();
      return;
    } else {
      next({
        name: "Validation Error",
        element: "params: id",
        message: "The task id must be a valid objectid",
      });
      return;
    }
  },
  isComplete: (req,res,next)=>{
   // const check=req.body.isC
   if (req.body.isComplete){
    if (req.body.isComplete ==="true"||req.body.isComplete ==="false" )
    {
      next();
      return;
    } else {
      next({
        name: "Validation Error",
        element: "params: isComplete",
        message: "The isComplete must be a boolean value",
      });
      return;
    }
  }
  next();
  return;
  },
  title: (req, res, next) => {
    if (req.body.title) {
      if (req.body.title.length < 2 || req.body.title.length > 200) {
        next({
          name: "Validation Error",
          element: "body: title",
          message: "The title length should be between 2 and 200 chars",
        });
        return;
      }
      next();
      return;
    }
    next();
    return;
  },
  desc: (req, res, next) => {
    if (req.body.desc) {
      if (req.body.desc.length < 2 || req.body.desc.length > 500) {
        next({
          name: "Validation Error",
          element: "body: desc",
          message: "The description length should be between 2 and 500 chars",
        });
        return;
      }
      next();
      return;
    }
    next();
    return;
  },
 
  titleRequired: (req, res, next) => {
    if (req.body.title) {
      next();
      return;
    }
    next({
      name: "Validation Error",
      element: "body: title",
      message: "The task title is required",
    });
    return;
  },

  titleNotEmpty: (req, res, next) => {
    if (req.body.title === "") {
      next({
        name: "Validation Error",
        element: "body: title",
        message: "The task title cannot be empty",
      });
      return;
    }
    next();
    return;
  },

};
const validate = {
 // getOne: [rules.id],
  addOne: [rules.titleRequired, rules.title,rules.titleNotEmpty, rules.desc,rules.isComplete],
  updateOne: [
    rules.id,
    rules.titleRequired,
    rules.titleNotEmpty,
   rules.title,  
   rules.desc,
  rules.isComplete,
  ],
  deleteOne: [rules.id],
};

module.exports = validate;