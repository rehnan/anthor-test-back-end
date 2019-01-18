'use strict'

/*
|--------------------------------------------------------------------------
| MovieSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Movie = use('App/Models/Movie');

class MovieSeeder {
  async run () {
    await Movie.query().delete();
    await Factory.model('App/Models/Movie').createMany(50);
  }
}

module.exports = MovieSeeder;
