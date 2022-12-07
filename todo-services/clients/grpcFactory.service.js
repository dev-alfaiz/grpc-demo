const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageConfig = {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
};

const loadPackageDefinition = (proto, config = null) => {
  const packageDefination = protoLoader.loadSync(
    proto,
    config || packageConfig
  );

  return grpc.loadPackageDefinition(packageDefination);
};

const getConnection = (connection = "") => {
  if (connection !== "") {
    return connection;
  }
  return "0.0.0.0:6006";
};
module.exports = { getConnection, loadPackageDefinition };
