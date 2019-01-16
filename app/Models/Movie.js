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

  /**
   * Create new movie
   * @param data - data request params
   * @returns {Promise<Movie>} - returns new movie instance created
   */
  static async createNewMovie(data) {
    throw new Error('Not implemented yet!');
  }

  /**
   * Get movie list
   * @returns {Promise<Movie>} - returns array of movies
   */
  static async getAllMovies() {
    throw new Error('Not implemented yet!');
  }

  /**
   * Get move by filter
   * @param conditions - query conditions to filter movies
   * @returns {Promise<Array<Movie>>}
   */
  static async findMovieBy(conditions) {
    throw new Error('Not implemented yet!');
  }

  /**
   * Update movie by id
   * @param id - movie id
   * @param data - data request params
   * @returns {Promise<Movie>} - returns movie instance updated
   */
  static async updateMovieById(id, data) {
    throw new Error('Not implemented yet!');
  }

  /**
   * Delete movie by id
   * @param id - movie id
   * @returns {Promise<Movie>} - returns movie instance removed
   */
  static async deleteMovieById(id) {
    throw new Error('Not implemented yet!');
  }

  /**
   * Sanitize data attributes
   * @param attributes - data attributes that will be sanitized
   * @returns {Promise<Array<Object>>} - Returns array of data attributes
   */
  static async sanitizeAttributes(attributes) {
    throw new Error('Not implemented yet!');
  }

  /**
   * Validate attribute values
   * @param attributes - data attributes
   * @returns {Promise<void>}
   */
  static async validateAttributeValues(attributes) {
    throw new Error('Not implemented yet!');
  }
}

module.exports = Movie;
