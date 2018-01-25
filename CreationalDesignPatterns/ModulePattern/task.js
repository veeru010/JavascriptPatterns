let TaskRepo = require('./taskRepo');

let Task = function(data){
  this.title = data.title;
  this.isCompleted = false;
}

Task.prototype.complete = function(){
  console.log(`Marking ${this.title} as complete`);
  this.isCompleted = true;
  this.save();
}

Task.prototype.save = function(){
  console.log(`Saving ${this.title}`);
  TaskRepo.save(this);
}

module.exports = Task;