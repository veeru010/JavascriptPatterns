/*
  RepoFactory acts as an abstraction, by providing repo objects.
*/

let RepoFactory = function(){
  let repos = this;
  let repoList = [
    {name : 'user', module : './userRepo'},
    {name : 'task', module : './taskRepo'},
    {name : 'project', module : './projectRepo'}
  ];

  repoList.forEach((repo) => {
    repos[repo.name] = require(repo.module)()
  });
}

module.exports = new RepoFactory;