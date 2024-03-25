require('dotenv').config();

const serverConfig = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  dbUriMongo: process.env.DB_URI,
  CONNECTION_STRING: process.env.CONNECTION_STRING
};

const jwtParams = {
  secret: process.env.SECRET_KEY,
  exporesIn: process.env.TOKEN_EXPIRES_IN,
};

module.exports = {
  serverConfig,
  jwtParams,
};
