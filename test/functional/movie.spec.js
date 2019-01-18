'use strict'

const { before, after, test, trait } = use('Test/Suite')('Integration Tests > Movie');
trait('Test/ApiClient')
const Movie = use('App/Models/Movie');
const apiVersion = '/v1';

before(async () => {
  // Create movies
  // Sign in
});

test('should get movie list', async ({ client, assert }) => {
  const response = await client.get(`${apiVersion}/movies`).end();
  response.assertStatus(200);
});

test('should get movie by id', async ({ client, assert }) => {
  const response = await client.get(`${apiVersion}/movies`).end();
  response.assertStatus(200);
});

test('should create a new movie', async ({ client, assert }) => {
  const response = await client.post(`${apiVersion}/movies`)
    .field('email', 'user-1')
    .field('password', 'password')
    .end();
  response.assertStatus(200);
});

test('should update movie by id', async ({ client, assert }) => {
  const response = await client.post(`${apiVersion}/movies`)
    .field('email', 'user-1')
    .field('password', 'password')
    .end();
  response.assertStatus(200);
});

test('should delete movie by id', async ({ client, assert }) => {
  const response = await client.post(`${apiVersion}/movies`)
    .field('email', 'user-1')
    .field('password', 'password')
    .end();
  response.assertStatus(200);
});

after(async () => {
  // Sign out
  // Delete user
});
