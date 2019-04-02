module.exports = function(app) {
    var todoList = require('../controller/appcontrol');
     var stodoList = require('../controller/studcontrol');
     var sltodoList = require('../controller/scoocontrol');
    //  var ltodoList = require('../controller/control');
  
  
  
    // todoList Routes
    app.route('/tasks')
      .get(todoList.list_all_tasks);

    app.route('/tasks1')
      .post(todoList.create_a_task);

     //stud
     app.route('/studtasks')
      .get(stodoList.list_all_tasks);
     app.route('/studtasks1')
      .post(stodoList.create_a_task);

     //school
      app.route('/scootasks')
      .get(sltodoList.list_all_tasks);
    //  app.route('/scootasks1')
    //   .post(sltodoList.create_a_task);

    //   //lablist_all_tasks
    //   app.route('/labtasks')
    //   .get(ltodoList.list_all_tasks);
    //  app.route('/labtasks1')
    //   .post(ltodoList.create_a_task);
     
     app.route('/getAll')
      .get(sltodoList.getAll)
      };

      
  