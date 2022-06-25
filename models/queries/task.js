const Task = require("../schemas/task");

const queries={

    //add task
    addOne: (task, handler) => {
        const newTask = new Task(task);
        newTask.save((err) => {
          err ? handler(err) : handler(null, task);
        });
      },
    //retrieve tasks 

    getAll: ( handler) => {
        Task.find({})
          .exec((err, tasks) => {
            if (err) handler(err);
            handler(null, tasks);
          });
      },
    //update task
    updateOne: (id, update, handler) => {
      Task.findOneAndUpdate({ _id: id }, update, (err, task) => {
        err ? handler(err) : handler(null, task);
      });
    },
    //delete task
    deleteOne: (id, handler) => {
        Task.findOneAndDelete({ _id: id }, (err, task) => {
          err ? handler(err) : handler(null, task);
        });
      },

};
module.exports = queries;