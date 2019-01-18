'use strict'

const { after, test } = use('Test/Suite')('Unit Tests > Movie');
const Movie = use('App/Models/Movie');
const Factory = use('Factory');


test('should returns instance of new movie created', async ({ assert }) => {
  const fakeData = await Factory.model('App/Models/Movie')
    .make();
  const movie = await Movie.createNewMovie(fakeData.toJSON());
  assert.isNotNull(movie);
  assert.isTrue(movie instanceof Movie);
});

test('should return the list of all movies', async ({ assert }) => {
  await Factory.model('App/Models/Movie')
    .createMany(4);
  const movies = await Movie.getAllMovies();
  assert.isTrue(movies.size() > 2);
  for (const movie of movies.rows) {
    assert.isTrue(movie instanceof Movie);
  }
});

test('should find movie by title', async ({ assert }) => {
  const fakeData = await Factory.model('App/Models/Movie')
    .make();
  const title = 'find if movie by title'
  fakeData.title = title;
  await fakeData.save();
  const movie = await Movie.findMovieBy({title});
  assert.isNotNull(movie);
  assert.isTrue(movie instanceof Movie);
});

test('should update movie by id if it found', async ({ assert }) => {
  const fakeData = await Factory.model('App/Models/Movie')
    .make();
  await fakeData.save();
  const newData = {
    title: 'Title Updated',
    language: 'Português',
    type: 'musical',
  };
  const movie = await Movie.updateMovieById(fakeData._id, newData);
  assert.isTrue(movie instanceof Movie);
  assert.equal(newData.title, movie.title);
  assert.equal(newData.language, movie.language);
  assert.equal(newData.type, movie.type);
});

test('should not update movie by id if it not found', async ({ assert }) => {
  const newData = {
    title: 'Title Updated',
    language: 'Português',
    type: 'musical',
  };
  const movie = await Movie.updateMovieById(null, newData);
  assert.isNull(movie);
});

test('should delete movie by id if it found', async ({ assert }) => {
  const fakeData = await Factory.model('App/Models/Movie')
    .make();
  await fakeData.save();
  const movieWasRemoved = await Movie.deleteMovieById(fakeData._id);
  assert.isTrue(movieWasRemoved);
  const movie = await Movie.findMovieBy({_id: fakeData._id});
  assert.isNull(movie);
});

test('should not delete movie by id if it not found', async ({ assert }) => {
  const movieWasRemoved = await Movie.deleteMovieById(null);
  assert.isFalse(movieWasRemoved);
});

after(async () => {
  await Movie.query().delete();
});


