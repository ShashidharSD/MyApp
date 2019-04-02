var Task = require('../model/scoomodel.js');
var student = require('../model/studmodel');
var lab = require('../model/labmodel.js');

exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.getAll = async function(req, res) {
    // let task =  await getAllTask();
    // let student = await getAllStudent();
    // let lab = await getAllLabs();
    let result = await Promise.all([getAllTask(),getAllStudent(),getAllLabs()]);

    res.send({
        task:result[0],
        student:result[1],
        lab:result[2]
    });
    // res.send({
    //     task,
    //     student,
    //     lab
    // });
  };
  

function getAllTask(){
    return new Promise(function(resolve){
        Task.getAllTask(function(err, task) {
            if (err) resolve(err);
            else resolve(task);
          });
    })
}

function getAllStudent(){
    return new Promise(function(resolve){
        student.getAllTask(function(err, task) {
            if (err) resolve(err);
            else resolve(task);
          });
    })
}

function getAllLabs(){
    return new Promise(function(resolve){
        lab.getAllTask(function(err, task) {
            if (err) resolve(err);
            else resolve(task);
          });
    })
}

// exports.create_a_task = function(req, res) {
//   var new_task = new Task(req.body);

//   //handles null error 
// //    if(!new_task.task || !new_task.status){

// //             res.status(400).send({ error:true, message: 'Please provide task/status' });

// //         }
// // else{
  
//   Task.createTask(new_task, function(err, task) {
    
//     if (err) res.send(err);
//      res.json(task);
//   });
// //}task
// };