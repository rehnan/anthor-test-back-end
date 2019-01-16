'use strict'

const { before, after, test } = use('Test/Suite')('Unit Tests > User');
const User = use('App/Models/User');
let user = {username: 'test', password: 'password'};

before(async () => {
  user = await User.create({username: 'test', password: 'password'})
});

test('should found a existent user searching for user credentials', async ({ assert }) => {
  const {username, password} = user;
  const foundUser = await User.getUserByCredentials({username, password});
  assert.isTrue(foundUser);
  assert.isTrue(user instanceof User);
});

test('should return null searching for user credentials to inexistent user', async ({ assert }) => {
  const {username, password} = user;
  const shoudBeNull = await User.getUserByCredentials({username, password});
  assert.isNull(shoudBeNull);
});

test('should found a existent user searching for user token', async ({ assert }) => {
  // TODO - Authenticate user first
  const {token} = user;
  const foundUser = await User.getUserByToken(token);
  assert.isTrue(foundUser);
  assert.isTrue(user instanceof User);
});

test('should return null searching for user token to inexistent user', async ({ assert }) => {
  // TODO - Authenticate user first
  const {token} = user;
  const foundUser = await User.getUserByToken(token);
  assert.isTrue(foundUser);
  assert.isTrue(user instanceof User);
});

test('should sign in valid user account and return logged token', async ({ assert }) => {
  // TODO - Authenticate user first
  const token = await user.signIn();
  // TODO - check if token is not null
  assert.isNotNull(token);
  // TODO - check if a valida token
});

test('should sign out valid user account and return true to destroyed token', async ({ assert }) => {
  // TODO - Authenticate user first
  const tokenWasDestroyed = await user.signOut();
  assert.isTrue(tokenWasDestroyed);
});

test('should returns true to authenticated user account', async ({ assert }) => {
  // TODO - Authenticate user first
  const isAuthenticated = await user.signOut();
  assert.isTrue(tokenWasDestroyed);
});

test('should returns false no authenticated user account', async ({ assert }) => {
  // TODO - Authenticate user first
  const NotAuthenticated = await user.isAuthenticated();
  assert.isTrue(NotAuthenticated);
});

after(async () => {
  await user.delete();
});
