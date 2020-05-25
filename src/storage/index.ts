import * as fs from 'fs';
import * as knex from 'knex';

import { seedData } from '../seed';

export * from './users';

const DB_FILE = `${__dirname}/../../.data/sqlite.db`;

export const conn = knex({
  client: 'sqlite3',
  connection: () => ({
    filename: process.env.SQLITE_FILENAME || DB_FILE,
  }),
});

export function initDB() {
  // TODO: remove
  fs.unlinkSync(DB_FILE);

  if (fs.existsSync(DB_FILE)) {
    console.log('Database "users" ready to go!');
  } else {
    migrateUp(conn)
      .then(() => {
        seedData(conn);
      })
      .catch((err: string) => {
        console.log(`could not init db: ${err}`);
      });
  }
}

async function migrateUp(conn: knex<any, unknown[]>) {
  return conn.schema
    .createTable('users', (tableBuilder: knex.CreateTableBuilder) => {
      tableBuilder.increments();
      tableBuilder.text('name');
      tableBuilder.text('email');
      tableBuilder.timestamps(false, true);
    })
    .then(() => {
      return conn.schema.table('users', (tableBuilder) => {
        tableBuilder.unique(['email']);
      });
    });
}
