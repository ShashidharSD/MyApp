var sql = require('./db.js');

//Task object constructor
var Task = function (task) {
    this.name = task.name;
    this.id = task.id;
};
Task.createTask = function createUser(newTask, result) {
    sql.query(`INSERT INTO studdetail (id,name) values(${newTask.id},'${newTask.name}')`, newTask, function (err, res) {

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
    sql.query("Select * from studdetail", function (err, res) {

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