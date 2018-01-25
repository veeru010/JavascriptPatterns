let ProjectRepo = function(){
  let get = function(id){
    console.log(`Getting Project ${id} from database`);
    return {name : `Project${id}`};
  }

  return {
    get : get
  }
}

module.exports = ProjectRepo;