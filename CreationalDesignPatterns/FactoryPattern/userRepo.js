let UserRepo = function(){
  let get = function(id){
    console.log(`Fetching User ${id} from database`);
    return {name:`User${id}`};
  }

  return {
    get : get
  }
}

module.exports = UserRepo;