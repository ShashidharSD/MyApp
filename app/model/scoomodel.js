var sql = require('./db.js');

//Task object constructor
var Task = function (task) {
    this.sname = task.sname;
    this.place = task.place;
};
Task.createTask = function createUser(newTask, result) {
    sql.query(`INSERT INTO school (sname,place) values('${newTask.sname}','${newTask.place}')`, newTask, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Task.getAllTask = function getAllTask(result) {
    sql.query("Select * from school", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tasks 1: ', res);

            result(null, res);
        }
    });
};

module.exports = Task;