var Task = require('../model/studmodel.js');

exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};



exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);

  //handles null error 
//    if(!new_task.task || !new_task.status){

//             res.status(400).send({ error:true, message: 'Please provide task/status' });

//         }
// else{
  
  Task.createTask(new_task, function(err, task) {
    
    if (err) res.send(err);
     res.json(task);
  });
//}task
};