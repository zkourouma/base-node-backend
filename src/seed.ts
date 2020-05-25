import * as knex from 'knex';

import { NewUser } from './schema';

export function seedData(conn: knex<any, unknown[]>) {
  const users: NewUser[] = [
    { name: 'emma', email: 'emma' },
    { name: 'eve', email: 'eve' },
    { name: 'zack', email: 'zack' },
  ];
  conn.batchInsert('users', users);
}
