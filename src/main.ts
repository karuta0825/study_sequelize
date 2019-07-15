import * as models from './models';

(async () => {
  try {
    await models.project.sync({ force: true });

    const project = models.project.build({
      title: 'my awesome project',
      description: 'woot woot. this will make me a rich man'
    });

    const created = await project.save();

    console.log(created.toJSON());
  } catch (e) {
    console.log(e);
  }
})();
