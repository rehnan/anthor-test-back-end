'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User');

class UserSeeder {
  async run () {
    const data = {email: 'root@anthor.com.br', password: 'password'};
    const defaultUser = await User.findOrCreate({email: data.email}, data);
  }
}

module.exports = UserSeeder;
