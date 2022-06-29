const queries = require("../models/queries/task");
const controller ={
    //add
    addOne: (req, res, next) => {
        const task = {
          title: req.body.title,
          desc: req.body.desc,
          isComplete:req.body.isComplete,
        };
        queries.addOne(task, (err, task) => {
          if (err) next(err);
          if (task) res.status(200).json({ message: "task is added" });
        });
        return;
      },
    //delete task
    deleteOne: (req, res, next) => {
        queries.deleteOne(req.params.id, (err, task) => {
          if (err) next(err);
          task
            ? res.status(200).json({ message: "task is deleted" })
            : res.status(404).json({ message: "task not found" });
        });
        return;
      },
      //update
      updateOne: (req, res, next) => {
        
        const update = {
          title: req.body.title,
          desc: req.body.desc,
          isComplete:req.body.isComplete,
         
          modifiedAt:Date.now() ,
          
        };
        queries.updateOne(req.params.id, update, (err, task) => {
          if (err) next(err);
          if (task) {
            res.status(200);
            res.json({ message: "task is updated" });
          } else {
            res.status(404);
            res.json({ message: "task not found" });
          }
        });
        return;
      },
      //rtrieve
      getAll: (req, res, next) => {
        
        queries.getAll( (err, tasks) => {
          if (err) next(err);
          if (tasks) {
           
              res.status(200);
              res.json({ tasks: tasks,  });
            }
           else {
            res.status(200);
            res.json({ message: "no tasks added yet" });
          }
        });
        return;
      },


};
module.exports = controller;
