'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  /**
   * Find user by credentials and return user
   * @returns {{user|null}} - Returns user
   */
  static async getUserByCredentials(credentials) {
    throw new Error('Not implemented yet!');
  }

  /**
   * Find user by token and return user
   * @returns {{user|null}} - Returns user
   */
  static async getUserByToken(token) {
    throw new Error('Not implemented yet!');
  }

  /**
   * Sign in user account and returns token
   * @returns {{user}} - Returns authenticated user with token attached
   */
  async signIn() {
    throw new Error('Not implemented yet!');
  }

  /**
   * Sign out user account and destroy token
   * @returns {{user}} - Returns user without token
   */
  async signOut() {
    throw new Error('Not implemented yet!');
  }

  /**
   * Check if user is authenticated
   * @returns {{boolean}} - Returns true or false
   */
  * isAuthenticated() {
    throw new Error('Not implemented yet!');
  }
}

module.exports = User;
