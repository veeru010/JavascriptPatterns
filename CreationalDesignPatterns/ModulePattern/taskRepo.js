/*
  Module pattern is used to group methods with similiar functionality into a module
  Using closure gives the ability to keep the implementation details private and expose only
  necessary logic.
  Below implementation is a slightly enhanced version called RevealingModule Pattern.
*/

let TaskRepo = function(){
  let db = {} // all the private variables can go here

  let get = function(id){
    console.log(`Getting task with id ${id} from database`);
    return {title : `Task${id}`};
  }

  let save = function(task){
    console.log(`Saving ${task.title} to database`);
  }

  return {
    get : get,
    save : save
  }
}

module.exports = TaskRepo() // will return the publicly exposed object.