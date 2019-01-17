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

  static get objectIdFields() {
    return ['_id'];
  }

  /**
   * Create new movie
   * @param data - data request params
   * @returns {Promise<Movie>} - returns new movie instance created
   */
  static async createNewMovie(data) {
    data = await this.sanitizeAttributes(data);
    const missingAttributes = await this.validateAttributeValues(data);
    if (missingAttributes.length > 0) {
      throw new Error(`Missing attributes: ${missingAttributes.join(',')}!`);
    }
    const movie = new this(data);
    await movie.save();
    return movie;
  }

  /**
   * Get movie list
   * @returns {Promise<Movie>} - returns array of movies
   */
  static async getAllMovies() {
    return await this.all();
  }

  /**
   * Get move by filter
   * @param conditions - query conditions to filter movies
   * @returns {Promise<Array<Movie>>}
   */
  static async findMovieBy(conditions) {
    return await this.where(conditions).first();
  }

  /**
   * Update movie by id
   * @param id - movie id
   * @param data - data request params
   * @returns {Promise<Movie>} - returns movie instance updated
   */
  static async updateMovieById(id, data) {
    const movie = await Movie.where({_id: id}).first();
    if (!movie) {
      return null;
    }
    const missingAttributes = await this.validateAttributeValues(data);

    if (missingAttributes.length > 0) {
      throw new Error(`Missing attributes: ${missingAttributes.join(',')}!`);
    }

    for (const attr of this.requiredAttributes) {
      if (typeof data[attr] !== 'undefined') {
        movie[attr] = data[attr];
      }
    }
    await movie.save();
    return movie;
  }

  /**
   * Delete movie by id
   * @param id - movie id
   * @returns {Promise<Movie>} - returns movie instance removed
   */
  static async deleteMovieById(id) {
    const removed = await this.where({_id: id}).delete();
    return !!removed.result.n >= 1;
  }

  /**
   * Sanitize data attributes
   * @param attributes - data attributes that will be sanitized
   * @returns {Promise<Array<Object>>} - Returns array of data attributes
   */
  static sanitizeAttributes(attributes) {
    return new Promise((resolve, reject) => {
      try {
        const data = {};
        this.requiredAttributes.map(attr => {
          data[attr] = typeof attributes[attr] !== 'undefined' ? attributes[attr] : null
        });
        return resolve(data);
      } catch (error) {
        return reject(error);
      }
    });
  }

  /**
   * Validate attribute values
   * @param attributes - data attributes
   * @returns {String<>}
   */
  static validateAttributeValues(attributes) {
    return new Promise((resolve, reject) => {
      try {
        return resolve(Object.keys(attributes).filter(key => attributes[key] === null
          && this.requiredAttributes.includes(key)));
      } catch (error) {
        return reject(error);
      }
    });
  }
}

module.exports = Movie;
