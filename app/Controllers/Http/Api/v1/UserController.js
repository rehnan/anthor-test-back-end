'use strict'

class UserController {
  async signIn ({ request, response }) {
    try {
      throw new Error('Not implemented yet!');
    } catch (error) {
      return response.notImplemented({message: 'Not implemented yet!'});
    }
  }

  async signOut ({ request, response }) {
    try {
      throw new Error('Not implemented yet!');
    } catch (error) {
      return response.notImplemented({message: 'Not implemented yet!'});
    }
  }

  async getUserBy ({ request, response }) {
    try {
      throw new Error('Not implemented yet!');
    } catch (error) {
      return response.notImplemented({message: 'Not implemented yet!'});
    }
  }

  async isAuthenticated ({ request, response }) {
    try {
      throw new Error('Not implemented yet!');
    } catch (error) {
      return response.notImplemented({message: 'Not implemented yet!'});
    }
  }
}

module.exports = UserController;
