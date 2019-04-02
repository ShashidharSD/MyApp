var sql = require('./db.js');

//Task object constructor
var Task = function (task) {
    this.name = task.name;
    this.id = task.id
};
Task.createTask = function createUser(newTask, result) {
    sql.query(`INSERT INTO suddetail (id,name) values(${newTask.id},'${newTask.name}')`, newTask, function (err, res) {

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
Task.getTaskById = function createUser(taskId, result) {
    sql.query("Select name from studdetail where id =?", taskId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);

        }
    });
};
Task.getAllTask = function getAllTask(result) {
    return new Promise(function(resolve,reject){
        sql.query("Select * from studdetail", function (err, res) {

            if (err) {
                console.log("error: ", err);
                resolve(err);
            }
            else {
                console.log('tasks 1: ', res);
    
                resolve(res);
            }
        });

    })
    
};
Task.updateById = function (id, task, result) {
    sql.query("UPDATE studdetail SET name = ? WHERE id = ?", [task.name, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Task.remove = function (id, result) {
    sql.query("DELETE FROM studdetail WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Task;