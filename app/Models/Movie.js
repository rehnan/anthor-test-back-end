'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Movie extends Model {

  static get requiredAttributes() {
    return [
      'title',
      'year',
      'rated',
      'released',
      'runtime',
      'genre',
      'director',
      'writer',
      'actors',
      'plot',
      'language',
      'country',
      'awards',
      'poster',
      'ratings',
      'metascore',
      'imdbRating',
      'imdbVotes',
      'imdbID',
      'type',
      'dvd',
      'boxOffice',
      'production',
      'website',
    ];
  }
}

module.exports = Movie;
