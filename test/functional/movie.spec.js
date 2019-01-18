'use strict'

const { before, after, test, trait } = use('Test/Suite')('Integration Tests > Movie');
const Factory = use('Factory');

trait('Test/ApiClient');

const apiVersion = '/v1';

let fakeMovie = null;
let fakeUser = null;

before(async () => {
  // Initialize fake data
  fakeMovie = await Factory.model('App/Models/Movie').create(1);
  fakeUser = await Factory.model('App/Models/User').create(1);
});

test('should get movie list', async ({ client, assert }) => {
  const response = await client.get(`${apiVersion}/movies`).end();
  response.assertStatus(200);
});

test('should get movie by id', async ({ client, assert }) => {
  const response = await client.get(`${apiVersion}/movies/${fakeMovie._id}`).end();
  response.assertStatus(200);
});

test('should create a new movie', async ({ client, assert }) => {
  const data = await Factory.model('App/Models/Movie').make(1);
  const token = await auth.signIn(client);
  const response = await client.post(`${apiVersion}/movies`)
    .header('Authorization', `Bearer ${token}`)
    .type('json')
    .send(data.toJSON())
    .end();
  const {movie} = response.body;
  response.assertStatus(200);
  assert.isTrue('_id' in movie);
});

test('should update movie by id', async ({ client, assert }) => {
  const token = await auth.signIn(client);
  const newTitle = 'Should update title';
  const newYear = 'Should update year';
  const response = await client.patch(`${apiVersion}/movies/${fakeMovie._id}`)
    .header('Authorization', `Bearer ${token}`)
    .type('json')
    .field('title', newTitle)
    .field('year', newYear)
    .end();
  const {movie} = response.body;
  response.assertStatus(200);
  assert.isNotNull(movie);
  assert.equal(movie.title, newTitle);
  assert.equal(movie.year, newYear);
});

test('should delete movie by id', async ({ client, assert }) => {
  const token = await auth.signIn(client);
  const response = await client.delete(`${apiVersion}/movies/${fakeMovie._id}`)
    .header('Authorization', `Bearer ${token}`)
    .end();
  response.assertStatus(200);
  const {wasRemoved} = response.body;
  assert.isTrue(wasRemoved);
});

after(async () => {
  // Delete user
});

// Authentication
const auth = {};

auth.signIn = async (client) => {
  const response = await client.post(`${apiVersion}/auth/sign-in`)
    .field('email', fakeUser.email)
    .field('password', 'password')
    .end();
  return response.body.token;
};

auth.signOut = async (client, token) => {
  return await client.post(`${apiVersion}/auth/sign-out`)
    .header('Authorization', `Bearer ${token}`)
    .end();
};
