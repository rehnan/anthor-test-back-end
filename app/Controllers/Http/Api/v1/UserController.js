'use strict'
const User = use('App/Models/User');

class UserController {
  async signIn ({ request, response, auth }) {
    try {
      const {email, password} = request.all();
      let user = await User.where({email}).first();
      if (user) {
        let data = {};
        Object.assign(data, {user: user.toJSON()});
        const attempt = await auth.attempt(user.email, password);
        Object.assign(data, {token: attempt.token});
        return response.json(data);
      }
    } catch (error) {
      // console.error(error.message);
    }
    return response.unauthorized({message: 'Invalid credentials!'});
  }

  async signOut ({ request, response, auth }) {
    try {
      const currentUserToken = auth.getAuthHeader();
      const isLoggedIn = await auth.check();
      let logout = false;
      if (isLoggedIn) {
        await auth.revokeTokens([currentUserToken], true);
        logout = true;
      }
      return response.json({logout});
    } catch (error) {
      // console.error(error.message);
    }
    return response.unauthorized({message: 'Invalid credentials!'});
  }

  async isLoggedIn ({ request, response, auth }) {
    try {
      const isLoggedIn = await auth.check();
      return response.json({isLoggedIn});
    } catch (error) {
      // console.error(error.message);
      return response.unauthorized({message: 'Invalid credentials!'});
    }
  }

  async getUserBy ({ request, response, auth }) {
    try {
      const isLoggedIn = await auth.check();
      if (isLoggedIn) {
        const user = await auth.getUser();
        return response.json({user});
      }
    } catch (error) {
      // console.error(error.message);
      return response.unauthorized({message: 'Invalid credentials!'});
    }
  }
}

module.exports = UserController;
