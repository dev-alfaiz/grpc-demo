const grpc = require("@grpc/grpc-js");

const {
  loadPackageDefinition,
  getConnection,
} = require("./grpcFactory.service");
const UsersService = loadPackageDefinition("proto/user.proto").UsersService;

class UsersClient {
  clientProperty = "";
  metadata = new grpc.Metadata();
  constructor() {
    this.clientProperty = new UsersService(
      getConnection(),
      grpc.credentials.createInsecure()
    );

    this.metadata.set("x-service", "user-services");
  }

  handleClientMethod = (request, method) => {
    return new Promise((resolve, reject) => {
      this.clientProperty[method](request, this.metadata, (err, data) => {
        if (err || data?.error) {
          reject(err ?? data?.error);
        }
        resolve(data);
      });
    });
  };

  getUserById = (request) => {
    return this.handleClientMethod(request, "getUserById");
  };
  findUserByEmail = (request) => {
    return this.handleClientMethod(request, "findUserByEmail");
  };
}
module.exports = new UsersClient();
