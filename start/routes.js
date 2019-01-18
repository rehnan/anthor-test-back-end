'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => {
  return { greeting: 'Anthor Api (:' }
});

Route.group(() => {
  Route.get('/', 'Api/v1/MovieController.getMovies');
  Route.get('/:id', 'Api/v1/MovieController.getMovieById');
}).prefix('v1/movies');

Route.group(() => {
  Route.post('/', 'Api/v1/MovieController.createMovie');
  Route.patch('/:id', 'Api/v1/MovieController.updateMovieById');
  Route.delete('/:id', 'Api/v1/MovieController.deleteMovieById');
})
  .middleware('auth')
  .prefix('v1/movies');

Route.group(() => {
  Route.post('/', 'Api/v1/UserController.getUserBy');
}).prefix('v1/users');

Route.group(() => {
  Route.post('/sign-in', 'Api/v1/UserController.signIn');
  Route.post('/sign-out', 'Api/v1/UserController.signOut');
  Route.post('/authenticated', 'Api/v1/UserController.isLoggedIn');
}).prefix('v1/auth');
