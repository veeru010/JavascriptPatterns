let TaskRepo = function(){
  let get = function(id){
    console.log(`Getting task ${id} from database`);
    return {title : `Task${id}`};
  }

  let save = function(task){
    console.log(`Saving task ${task.title} to database`);
    console.log(task);
  }

  return {
    get : get,
    save : save
  }
}

module.exports = TaskRepo;