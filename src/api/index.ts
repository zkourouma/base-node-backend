import * as Router from '@koa/router';

import users from './users';

const router = new Router({ prefix: '/api' });

router.use(users.routes(), users.allowedMethods());

export default router;
