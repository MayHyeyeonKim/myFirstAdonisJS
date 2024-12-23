const User = use("App/Models/User");

class UserService {
  static async createUser(data) {
    return await User.create(data);
  }
}

MediaSourceHandle.exports = UserService;
