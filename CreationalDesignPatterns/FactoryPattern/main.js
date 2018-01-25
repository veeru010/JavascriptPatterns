let RepoFactory = require('./repoFactory');


let task1 = RepoFactory.task.get(1);
task1.user = RepoFactory.user.get(2);
task1.project = RepoFactory.project.get(3);

RepoFactory.task.save(task1);