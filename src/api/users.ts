import * as Router from '@koa/router';

import * as conn from '../storage';
import { CandidateUser, NewUser } from '../schema';

const router = new Router({ prefix: '/users' });

router.get('users', '/', async (ctx, next) => {
  ctx.body = await conn.listUsers();

  await next();
});

router.post('createUser', '/', async (ctx, next) => {
  const payload = ctx.request.body as NewUser;
  ctx.body = await conn.createUser(payload).catch((_err) => 'That user already exists');
  ctx.status = 400;

  await next();
});

router.put('editUser', '/:id', async (ctx, next) => {
  const payload = ctx.request.body as CandidateUser;
  const { id } = ctx.params as { id: number };
  ctx.body = await conn.updateUser(id, payload);

  await next();
});

router.delete('deleteUser', '/:id', async (ctx, next) => {
  const { id } = ctx.params as { id: number };
  ctx.body = await conn.deleteUser(id);

  await next();
});

export default router;
