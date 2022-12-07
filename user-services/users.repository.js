const UserService = require("./users.service");

class UserRepository {
  responseData = {};

  formatGRPCError = (e) => {
    let exception = e.message.split("||");
    let error = {
      code: exception[0],
      message: exception[0],
    };
    if (exception.length == 1) {
      error.code = "Internal Server Error!!!";
      error.message = exception[0];
    }
    return error;
  };

  setResponseData() {
    this.responseData = {
      error: null,
      user: null,
    };
  }

  getUserById = async (args, callback) => {
    const { id } = args.request;
    console.log(
      "🚀 ~ file: userService.js ~ line 26 ~ UserService ~ getUserById= ~ id",
      id
    );
    this.setResponseData();
    try {
      const responseData = await UserService.findById(id);
      console.log(
        "🚀 ~ file: userService.js ~ line 29 ~ UserService ~ getUserById= ~ responseData",
        responseData
      );
      this.responseData.user = responseData;
    } catch (error) {
      this.responseData.error = this.formatGRPCError(error);
    }
    callback(null, this.responseData);
  };

  findUserByEmail = async (args, callback) => {
    const { email } = args.request;
    this.setResponseData();
    try {
      const responseData = await UserService.findByEmail(email);
      this.responseData.user = responseData;
    } catch (error) {
      this.responseData.error = this.formatGRPCError(error);
    }

    callback(null, this.responseData);
  };
}

module.exports = new UserRepository();
