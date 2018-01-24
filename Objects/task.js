/*
  Use node task.js to run

  Three ways of creating Object

  1) Using simple curly braces
  2) Using Object.create
  3) Using new keyword

*/


let task = {
  title : 'My Task',
  description : 'Task Description property'
};

// can define a new property outside of the object definition.
task.toString = function(){
  return (this.title + ' ' + this.description);
}

console.log(task.toString());

// if we want more granular control on the properties we use Object.defineProperty as below

task.toString = Object.defineProperty(task,'toString',{
  value : function(){
    return this.title + ' modified using defineProperty';
  },
  writable : false,
  enumerable : false,
  configurable : true
});

console.log(task.toString());

/*
  i won't be able to reassign toString property as writable is false.
  Below assignment will be ignored.
*/
task.toString = 'hi'

/*
  When i enumerate the Object, toString property will not show up.
  As enumerable is set to false.
*/
console.log(task);
console.log(Object.keys(task));

/*
  I can modify these configurations on the toString property at a later point
  as the configurable is set to true on the property.
*/

Object.defineProperty(task,'toString',{
  enumerable : true
});

console.log(task);


/*
2) Creating Object using Object.create. This is how we get inheritance working in Javascript
*/

let urgentTask = Object.create(task);
console.log(urgentTask.toString()); // should use the parent toString() method
Object.defineProperty(urgentTask,'toString',{
  value : function(){
    return this.title + ' is very urgent';
  }
});

console.log(urgentTask.toString());


/*
  3) Use new keyword
*/

let newTask = new Object();
newTask.title = 'Title of the Object created using new Object';
console.log(newTask['title']);