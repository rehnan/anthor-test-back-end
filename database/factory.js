'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/Movie', faker => {
   return {
     title: faker.sentence({ words: 5 }),
     year: `${faker.year()}`,
     rated: 'PG-13',
     released: `${faker.date()}`.split(' ', 3).join(' '),
     runtime: `${faker.minute()} min`,
     genre: 'Action, Adventure, Comedy, Sci-Fi',
     director: `${faker.first()} ${faker.last()}`,
     writer: `${faker.first()} ${faker.last()}, ${faker.first()} ${faker.last()}`,
     actors: `${faker.first()} ${faker.last()}, ${faker.first()} ${faker.last()}`,
     plot: faker.sentence(),
     language: 'English',
     country: faker.country({ full: true }),
     awards: faker.sentence(),
     poster: 'https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg',
     ratings: [
       {
         Source: "Internet Movie Database",
         Value: "7.7/10"
       },
       {
         Source: "Rotten Tomatoes",
         Value: "83%"
       },
       {
         Source: "Metacritic",
         Value: "67/100"
       }
     ],
     metascore: `${faker.natural({min: 1, max: 100})}`,
     imdbRating: '7.7',
     imdbVotes: '431,166',
     imdbID: 'tt3896198',
     type: 'movie',
     dvd: `${faker.date()}`.split(' ', 3).join(' '),
     boxOffice: '$389,804,217',
     production: 'Walt Disney Pictures',
     website: faker.url(),
   }
});

Factory.blueprint('App/Models/User', faker => {
  return {
    email: faker.email({domain: 'anthor.com.br'}),
    password: 'password',
  }
});
