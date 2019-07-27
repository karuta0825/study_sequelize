import { db } from './models';

(async () => {
  await db.Project.sync({ force: true });
  await db.Task.sync({ force: true });

  // const project = db.Project.build({
  //   title: 'my awesome project',
  //   description: 'woot woot. this will make me a rich man'
  // });

  // const task = db.Task.build({
  //   title: 'task',
  //   description: 'dest',
  //   deadline: new Date(),
  //   Project: project
  // });

  // const created = await project.save();
  // await created.createTask({ title: 'title', description: 'description' });

  // const projects = await db.Project.findAll({
  //   include: [db.Task]
  // });
  // console.log(projects.map(d => d.toJSON()));

  // const tasks = await db.Task.findAll({ include: [db.Project] });
  // console.log(tasks.map(d => d.toJSON()));

  // create with association
  // This is not the same transaction, and so it's not cool.
  await db.Project.create(
    {
      id: 1,
      title: 'my awesome project',
      description: 'woot woot. this will make me a rich man',
      Tasks: [
        { title: 'title', description: 'description' },
        { title: 'title', description: 'description' },
        { title: 'title', description: 'description' },
        { title: 'title', description: 'description' }
      ]
    },
    { include: [db.Task] }
  );

  // create many projects with associate is inpossible
})();
