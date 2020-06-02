import * as Koa from 'koa';
import * as Router from '@koa/router';

import * as conn from '../storage';
import { CandidateUser, NewUser } from '../schema';

const router = new Router({ prefix: '/users' });

router.get('users', '/', async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = await conn.listUsers();

  await next();
});

router.post('createUser', '/', async (ctx: Koa.Context, next: Koa.Next) => {
  const payload = ctx.request.body as NewUser;
  ctx.body = await conn.createUser(payload).catch((_err) => 'That user already exists');
  ctx.status = 400;

  await next();
});

router.put('editUser', '/:id', async (ctx: Koa.Context, next: Koa.Next) => {
  const payload = ctx.request.body as CandidateUser;
  const { id } = ctx.params as { id: number };
  ctx.body = await conn.updateUser(id, payload);

  await next();
});

router.delete('deleteUser', '/:id', async (ctx: Koa.Context, next: Koa.Next) => {
  const { id } = ctx.params as { id: number };
  ctx.body = await conn.deleteUser(id);

  await next();
});

export default router;
