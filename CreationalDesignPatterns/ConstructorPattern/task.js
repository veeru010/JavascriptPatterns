/*
  Constructor Pattern : Used to create new Objects with their own Object Scope

  If we take any function and drop a new keyword infront of it, javascript does the following
  1) It makes it a constructor function by creating a new Object.
  2) Links the newly created Object to original objects prototype.
  3) Binds 'this' to new Object scope
  4) implicitly returns this.
*/


let Task = function(title){
  this.title = title;
  this.isComplete = false;
  this.completed = function(){
    console.log(this.name + ' is completed');
    this.isComplete = true;
  }

  this.save = function(){
    console.log(this.name + ' is saved to database');
  }
}

/*
  The problem with the above definition is the completed and save functions are copied across each
  object that's created. The best way to share these across various task objects is to put them on the
  prototype of Task function (which is also an object)

  Prototype is an encapsulation of all the properties that an Object links to i.e. instead of having the properties
  on the object itself it can link to properties that are present on it's prototype. So every copy of the Object that
  i have can just link back to that single prototype.

  Redefining
*/

Task = function(title){
  this.title = title;
  this.isComplete = false;
}

Task.prototype.completed = function(){
  console.log('Running from Prototype');
  console.log(this.title + ' is completed');
  this.isComplete = true;
}

Task.prototype.save = function(){
  console.log('Running from Prototype');
  console.log(this.title + ' is saved to database');
}

// Node uses CommonJS modules
module.exports = Task;