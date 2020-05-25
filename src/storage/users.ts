import { CandidateUser, NewUser, User } from '../schema';

import { conn } from './index';

export async function listUsers(): Promise<User[]> {
  return new Promise((accept, _reject) => {
    conn.select().from<User>('users').then(accept);
  });
}

export async function createUser(payload: NewUser) {
  return new Promise((accept, _reject) => {
    conn('users')
      .insert(payload)
      .then((ids) => accept({ id: ids[0] }));
  });
}

export async function updateUser(id: number, payload: CandidateUser) {
  return new Promise((accept, _reject) => {
    conn('users').where({ id }).update(payload).then(accept);
  });
}

export async function deleteUser(id: number) {
  return new Promise((accept, _reject) => {
    conn('users').where({ id }).del().then(accept);
  });
}
