'use strict'

const { before, after, test, trait } = use('Test/Suite')('Integration Tests > User');
trait('Test/ApiClient')
const User = use('App/Models/User');
const apiVersion = '/v1';
let fakeUsers = [];
before(async () => {
  fakeUsers = [{email: 'user-2'}, {email: 'user-1'}, {email: 'user-3'}];
  const users = fakeUsers.map(u => {
    u.password ='password';
    return u;
  });
  await User.createMany(users);
});

test('sign in valid user account', async ({ client, assert }) => {
  const response = await client.post(`${apiVersion}/auth/sign-in`)
    .field('email', 'user-1')
    .field('password', 'password')
    .end();
  const {user, token} = response.body;
  response.assertStatus(200);
  assert.equal(user.email, 'user-1');
  assert.isNotNull(token);
});

test('should validate authentication to invalid username account', async ({ client, assert }) => {
  const response = await client.post(`${apiVersion}/auth/sign-in`)
    .field('email', 'invalid-user')
    .field('password', 'password')
    .end();
  response.assertStatus(401);
  response.assertText('{"message":"Invalid credentails!"}')
});

test('should validate authentication to invalid password account', async ({ client, assert }) => {
  const response = await client.post(`${apiVersion}/auth/sign-in`)
    .field('email', 'user-1')
    .field('password', 'invalid-password')
    .end();
  response.assertStatus(401);
  response.assertText('{"message":"Invalid credentails!"}')
});

test('sign out user account', async ({ client }) => {
  let response = await client.post(`${apiVersion}/auth/sign-in`)
    .field('email', 'user-1')
    .field('password', 'password')
    .end();
  const {token} = response.body;
  response = await client.post(`${apiVersion}/auth/sign-out`)
    .header('Authorization', `Bearer ${token}`)
    .end();
  response.assertStatus(200);
  response.assertText('{"logout":true}');
});

test('check user authentication status and return true to authenticated user account', async ({ client }) => {
  let response = await client.post(`${apiVersion}/auth/sign-in`)
    .field('email', 'user-1')
    .field('password', 'password')
    .end();
  const {token} = response.body;
  response = await client.post(`${apiVersion}/auth/authenticated`)
    .header('Authorization', `Bearer ${token}`)
    .end();
  response.assertStatus(200);
  response.assertText('{"isLoggedIn":true}');
});

test('check user authentication status and return false to unauthenticated user account', async ({ client }) => {
  let response = await client.post(`${apiVersion}/auth/sign-in`)
    .field('email', 'user-1')
    .field('password', 'password')
    .end();
  const {token} = response.body;
  response = await client.post(`${apiVersion}/auth/authenticated`)
    .header('Authorization', `Bearer ${token}`)
    .end();
  response.assertStatus(200);
  response.assertText('{"isLoggedIn":true}');
});

test('get user profile by token', async ({ client, assert }) => {
  let response = await client.post(`${apiVersion}/auth/sign-in`)
    .field('email', 'user-1')
    .field('password', 'password')
    .end();
  const {token} = response.body;
  response = await client.post(`${apiVersion}/users`)
    .header('Authorization', `Bearer ${token}`)
    .end();
  response.assertStatus(200);
  assert.isNotNull(response.body.user);
});

after(async () => {
  await User.query().delete();
});
