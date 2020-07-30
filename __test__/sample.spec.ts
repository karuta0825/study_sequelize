import * as assert from 'power-assert';
import { db, sequelize } from '../src/models';
import 'jest-allure/dist/setup';
import Person from '../src/models/sample';

it('test', () => {
  const p = new Person('adam', 10);
  // const actual = p.call();
  assert.deepEqual('adam', {d: 'adam'});
});

describe('Project Model', () => {
  beforeEach(async () => {
    await db.Project.sync({ force: true });
    await db.Task.sync({ force: true });
  });

  describe('create', () => {
    it('insert作成', async () => {
      const title = 'my awesome project';
      const description = 'woot woot. this will make me a rich man';

      const project = db.Project.build({
        title,
        description
      });

      await project.save();
      const rawProjects = await db.Project.findAll({
        attributes: ['id', 'title', 'description']
      });
      const [actual]: any = rawProjects.map(d => d.toJSON());

      const expect = {
        id: 1,
        title,
        description
      };
      assert.deepEqual(actual, expect);
    });
  });

  describe('hooks', () => {
    beforeAll(() => {
      db.Project.addHook<any, any>('afterCreate', (project, options) => {
        return db.Task.create({
          projectId: project.id,
          title: 'hooks',
          description: 'hooks',
          deadline: new Date()
        });
      });
    });

    afterAll(() => {
      db.Project.removeHook('afterCreate', 'afterCreate');
    });

    it('use hooks', async () => {
      await sequelize.transaction(transaction => {
        return db.Project.create(
          {
            title: 'project',
            description: 'project'
          },
          { transaction }
        );
      });

      const rawProjects = await db.Project.findAll({
        attributes: ['id', 'title', 'description'],
        include: [
          {
            attributes: ['id', 'title', 'description', 'deadline'],
            model: db.Task
          }
        ]
      });

      const [acutal] = rawProjects.map(d => d.toJSON());
      assert.deepEqual(acutal, {});
    });
  });
});
