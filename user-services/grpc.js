const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const UserRepository = require("./users.repository");

const startGRPCServer = async () => {
  const loaderProto = protoLoader.loadSync("proto/user.proto", {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
  });

  const protoData = grpc.loadPackageDefinition(loaderProto);
  const server = new grpc.Server();

  server.addService(protoData.UsersService.service, {
    getUserById: (args, callback) => UserRepository.getUserById(args, callback),
    findUserByEmail: (args, callback) =>
      UserRepository.findUserByEmail(args, callback),
  });

  server.bindAsync(
    `0.0.0.0:6006`,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.log("error", error);
      console.log("port", port);
      server.start();
    }
  );
};
module.exports = { startGRPCServer };
