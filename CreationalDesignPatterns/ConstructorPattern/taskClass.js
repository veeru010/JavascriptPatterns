/*
  What we have accomplished in task.js can also be accomplished using the new class construct
  Infact, when we transpile the below code it will result in the constructor function with prototype code
*/

'use strict' //needs this for using ES6 constructs

class Task{
  constructor(title){
    this.title = title;
    this.isComplete = false;
  }

  completed(){
    console.log(this.title + ' is completed');
    this.isComplete = true;
  }

  save(){
    console.log(this.title + ' is saved to database');
  }
}

module.exports = Task;