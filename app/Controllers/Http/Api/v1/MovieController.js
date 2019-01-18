'use strict'
const Movie = use('App/Models/Movie');

class MovieController {
  async getMovies ({ request, response }) {
    try {

    } catch (error) {
      // console.error(error.message);
    }
    return response.unauthorized({message: 'Invalid credentials!'});
  }

  async getMovieById ({ request, response }) {
    try {

    } catch (error) {
      // console.error(error.message);
    }
    return response.unauthorized({message: 'Invalid credentials!'});
  }

  async createMovie ({ request, response }) {
    try {

    } catch (error) {
      // console.error(error.message);
    }
    return response.unauthorized({message: 'Invalid credentials!'});
  }

  async updateMovieById ({ request, response }) {
    try {

    } catch (error) {
      // console.error(error.message);
    }
    return response.unauthorized({message: 'Invalid credentials!'});
  }

  async deleteMovieById ({ request, response }) {
    try {

    } catch (error) {
      // console.error(error.message);
    }
    return response.unauthorized({message: 'Invalid credentials!'});
  }
}

module.exports = MovieController;
