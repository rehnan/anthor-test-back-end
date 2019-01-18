'use strict'
const Movie = use('App/Models/Movie');

class MovieController {
  async getMovies ({ request, response }) {
    try {
      const movies = await Movie.getAllMovies();
      return response.json({movies});
    } catch (error) {
      // console.error(error.message);
    }
    return response.unauthorized({message: 'Unauthorized!'});
  }

  async getMovieById ({ request, response, params }) {
    try {
      const movie = await Movie.findMovieBy({_id: params.id});
      return response.json({movie});
    } catch (error) {
      // console.error(error.message);
    }
    return response.unauthorized({message: 'Unauthorized!'});
  }

  async createMovie ({ request, response }) {
    try {
      const movie = await Movie.createNewMovie(request.all());
      return response.json({movie});
    } catch (error) {
      // console.error(error.message);
    }
    return response.unauthorized({message: 'Unauthorized!'});
  }

  async updateMovieById ({ request, response, params }) {
    try {
      const movie = await Movie.updateMovieById(params.id, request.all());
      return response.json({movie});
    } catch (error) {
      // console.error(error.message);
    }
    return response.unauthorized({message: 'Unauthorized!'});
  }

  async deleteMovieById ({ request, response, params }) {
    try {
      const removed = await Movie.deleteMovieById(params.id);
      return response.json({wasRemoved: removed});
    } catch (error) {
      // console.error(error.message);
    }
    return response.unauthorized({message: 'Unauthorized!'});
  }
}

module.exports = MovieController;
