let Task = require('./task');
let TaskRepo = require('./taskRepo');

let task1 = new Task(TaskRepo.get(1));
let task2 = new Task({title : 'Task2'});

task1.complete();
task2.save();