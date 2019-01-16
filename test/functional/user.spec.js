'use strict'

const { before, after, test, trait } = use('Test/Suite')('Integration Tests > User');
trait('Test/ApiClient')
const User = use('App/Models/User');
const apiVersion = '/v1';

before(async () => {
  // TODO -  Use Faker to create fake datas
  const fakeUsers = [{username: 'user-2'}, {username: 'user-1'}, {username: 'user-3'}];
  const users = fakeUsers.map(u => {
    u.password = Math.random().toString();
    return u;
  });
  await User.createMany(users);
});

test('get user by credential', async ({ client }) => {
  const response = await client.get(`${apiVersion}/users`).end();
  response.assertStatus(200)
});

test('get user by token', async ({ client }) => {
  const response = await client.get(`${apiVersion}/users`).end();
  response.assertStatus(200);
});

test('sign in user account', async ({ client }) => {
  const response = await client.get(`${apiVersion}/users`).end();
  response.assertStatus(200)
});

test('sign out user account', async ({ client }) => {
  const response = await client.get(`${apiVersion}/users`).end();
  response.assertStatus(200)
});

test('check user authentication status', async ({ client }) => {
  const response = await client.get(`${apiVersion}/users`).end();
  response.assertStatus(200)
});

after(async () => {
  await User.query().delete();
});
