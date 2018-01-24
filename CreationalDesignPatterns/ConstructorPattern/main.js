//let Task = require('./taskClass');
let Task = require('./task');

let task1 = new Task('Create Constructor Pattern');
let task2 = new Task('Create Singleton Pattern');
let task3 = new Task('Create Factory Pattern');
let task4 = new Task('Create Module Pattern');

task1.completed();
task2.save();
task3.save();
task4.save();